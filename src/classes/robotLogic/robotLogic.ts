import { randomIntegerBetween } from "~/utils";

import { Ticker, TickerCallback } from "~/classes/ticker";

import { RobotLogicData } from "./robotLogic.data";

const noop = (): void => undefined;
const defaultData: Required<RobotLogicData> = {
    maxPosition: { x: 0, y: 0 },
    speed: 500,
    onMove: noop,
};

export class RobotLogic {
    // Private props
    private _data: Required<RobotLogicData>;
    private _positionHistory: RV.Point2D[] = [];
    private _ticker?: Ticker;

    // Public props
    get speed(): number {
        return this._data.speed;
    }

    get running(): boolean {
        return this._ticker !== undefined;
    }

    get currentPosition(): RV.Point2D | null {
        return this._positionHistory[0] || null;
    }

    get steps(): number {
        // Subtract by 1 because first position doesn't count as a step.
        return Math.max(this._positionHistory.length - 1, 0);
    }

    // Public methods
    constructor(data: RobotLogicData) {
        this._data = { ...defaultData, ...data };
    }

    async start(): Promise<void> {
        if(!this._ticker) {
            this._ticker = new Ticker(this._moveHandler, this._data.speed);
        }
        
        this._ticker.start();
    }

    pause(): void {
        this._ticker?.stop();
    }

    stop(): void {
        if(!this.running) {
            return;
        }

        this.pause();
        this._positionHistory = [];
        this._ticker?.destroy();
        delete this._ticker;
    }

    destroy(): void {
        this.stop();
        this._data = { ...defaultData };
    }

    hasBeenAtPosition(position: RV.Point2D, includeCurrentPosition = false): boolean {
        const { currentPosition } = this;

        if(!currentPosition) {
            return false;
        }

        return !!this._positionHistory
            .slice(includeCurrentPosition ? 0 : 1)
            .find((pos) => pos.x === position.x && pos.y === position.y);
    }

    // Private methods
    private _moveHandler: TickerCallback = ({ timeElapsed }) => {
        if(!this.running) {
            return;
        }

        const { currentPosition } = this;
        const { maxPosition, onMove } = this._data;
        const positionHistory = this._positionHistory;

        if(currentPosition) {
            const directions = ["north", "east", "south", "west"] as const;
            const getNextPosition = (): RV.Point2D => {
                const dir = directions[randomIntegerBetween(0, directions.length - 1)];
                const pos = { ...currentPosition };

                if(dir === "north") {
                    pos.y = currentPosition.y - 1;
                } else if(dir === "south") {
                    pos.y = currentPosition.y + 1;
                } else if(dir === "west") {
                    pos.x = currentPosition.x - 1;
                } else {
                    pos.x = currentPosition.x + 1;
                }

                const valid = (
                    pos.x >= 0
                    && pos.y >= 0
                    && pos.x <= maxPosition.x
                    && pos.y <= maxPosition.y
                );

                // If the position is invalid, randomize again.
                if(!valid) {
                    return getNextPosition();
                }

                return pos;
            };

            positionHistory.unshift(getNextPosition());
        } else {
            positionHistory.unshift({
                x: randomIntegerBetween(0, maxPosition.x),
                y: randomIntegerBetween(0, maxPosition.y),
            });
        }

        // Save footprints (remove duplicates from positionHistory).
        const footprints = positionHistory.filter((position, index) => {
            return positionHistory.findIndex((pos) => {
                return pos.x === position.x && pos.y === position.y;
            }) === index;
        });

        const finished = footprints.length === (maxPosition.x + 1) * (maxPosition.y + 1);
        
        onMove?.call(this, {
            position: positionHistory[0],
            finished,
            timeElapsed,
        });
    }
}
