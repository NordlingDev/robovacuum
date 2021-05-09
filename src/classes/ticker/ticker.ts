import { TickerCallback } from "./ticker.callback";

export class Ticker {
    // Private props
    private _callback: TickerCallback;
    private _tickRate: number;
    private _tick = -1;
    private _animFrameId?: number;
    private _timeStarted?: number;
    private _timeLast?: number;

    // Public methods
    constructor(callback: TickerCallback, tickRate: number) {
        this._callback = callback;
        this._tickRate = tickRate;
    }

    start(): void {
        if(this._animFrameId !== undefined) {
            return;
        }
        
        this._animFrameId = requestAnimationFrame(this._loop);
    }

    stop(): void {
        if(this._animFrameId === undefined) {
            return;
        }

        cancelAnimationFrame(this._animFrameId);
        delete this._animFrameId;
    }

    destroy(): void {
        this.stop();
        this._tick = -1;
        delete this._timeStarted;
    }

    // Private methods
    private _loop = (timeNow: number) => {
        if(this._animFrameId === undefined) {
            return;
        }

        if(this._timeStarted === undefined) {
            this._timeStarted = timeNow;
        }
        
        const tickRate = this._tickRate;
        const timeLast = this._timeLast || 0;

        if(!timeLast || (timeNow - timeLast) >= tickRate) {
            const timeElapsed = Math.floor((timeNow - this._timeStarted) / tickRate) * tickRate;

            this._timeLast = timeNow;
            this._tick++;

            this._callback({ timeNow, timeElapsed, tick: this._tick });
        }
        
        requestAnimationFrame(this._loop);
    }
}
