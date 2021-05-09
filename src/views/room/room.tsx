import React from "react";

import { RobotLogic, RobotLogicMoveInfo } from "~/classes";
import { useConfig, useRobotState } from "~/hooks";

import { RoomProps } from "./room.props";
import * as sc from "./room.styled";

const FLOOR_TILE_SPACING = 4;

export const Room: RV.Component<RoomProps> = ({
    className,
    style,
}) => {
    const lang = document.documentElement.lang || "en";
    const [{ roomDimensions, floorSize }] = useConfig();
    const [{ speed, running, paused, timeElapsed, position }, setRobotState] = useRobotState();
    const [finished, setFinished] = React.useState<boolean>(false);
    const onRobotMove = React.useCallback((info: RobotLogicMoveInfo) => {
        if(info.finished) {
            setFinished(info.finished);
        }
        setRobotState((prev) => ({
            ...prev,
            position: info.position,
            timeElapsed: info.timeElapsed,
            paused: info.finished,
        }));
    }, [setRobotState]);
    const robotLogic = React.useMemo(() => new RobotLogic({
        maxPosition: {
            x: roomDimensions.x - 1,
            y: roomDimensions.y - 1,
        },
        speed,
        onMove: onRobotMove,
    }), [roomDimensions, speed, onRobotMove]);

    React.useLayoutEffect(() => {
        return () => {
            robotLogic.stop();
        };
    }, [robotLogic]);

    React.useLayoutEffect(() => {
        if(running) {
            if(paused) {
                robotLogic.pause();
            } else {
                robotLogic.start();
            }
        } else {
            robotLogic.stop();
        }
    }, [running, paused, robotLogic]);

    return (
        <sc.Root className={className} style={style}>
            <sc.ControlPanel>
                <sc.ControlPanelLeft>
                    {finished
                        ? null
                        : (!running || paused) ? (
                            <sc.CleanButton
                                label={running ? "Resume" : "Clean"}
                                onPress={() => setRobotState((prev) => ({
                                    ...prev,
                                    running: true,
                                    paused: false,
                                }))}
                            />
                        ) : (
                            <sc.PauseButton
                                label="Pause"
                                onPress={() => setRobotState((prev) => ({
                                    ...prev,
                                    running: true,
                                    paused: true,
                                }))}
                            />
                        )
                    }
                    
                    {((running && paused) || finished) && (
                        <sc.ResetButton
                            label="Reset"
                            onPress={() => {
                                setFinished(false);
                                setRobotState((prev) => ({
                                    ...prev,
                                    running: false,
                                    paused: false,
                                    timeElapsed: 0,
                                }));
                            }}
                        />
                    )}
                </sc.ControlPanelLeft>
                <sc.ControlPanelRight>
                    <sc.ValueDisplay
                        label="Steps"
                        value={running
                            ? robotLogic.steps.toLocaleString(lang, {
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                            })
                            : "–"
                        }
                        $dim={!running}
                    />
                    <sc.ValueDisplay
                        label="Position"
                        value={running
                            ? `${position.x}x${position.y}`
                            : "–"
                        }
                        $dim={!running}
                    />
                    <sc.ValueDisplay
                        label="Time Elapsed"
                        value={running
                            ? `${(timeElapsed / 1000)
                                .toLocaleString(lang, {
                                    minimumFractionDigits: 1,
                                    maximumFractionDigits: 1,
                                })
                            }s`
                            : "–"
                        }
                        $dim={!running}
                    />
                </sc.ControlPanelRight>
            </sc.ControlPanel>

            <sc.Floor $dim={!running}>
                <sc.FloorGrid
                    sizeX={roomDimensions.x}
                    sizeY={roomDimensions.y}
                    cellSpacing={FLOOR_TILE_SPACING}
                    renderCell={(pos) => (
                        <sc.FloorTile
                            status={(running && robotLogic.hasBeenAtPosition(pos, paused)) || finished
                                ? "clean"
                                : "dirty"
                            }
                            size={floorSize}
                        />
                    )}
                    $finished={finished}
                />
                {running && (
                    <sc.RobotContainer
                        style={{
                            transform: `translate3d(${
                                position.x * (floorSize + FLOOR_TILE_SPACING)
                            }px, ${
                                position.y * (floorSize + FLOOR_TILE_SPACING)
                            }px, 0)`
                        }}
                        $floorSize={floorSize}
                        $speed={robotLogic.currentPosition ? robotLogic.speed : undefined}
                    >
                        <sc.Robot status={paused ? "idle" : "on"} />
                    </sc.RobotContainer>
                )}
            </sc.Floor>
        </sc.Root>
    );
};
