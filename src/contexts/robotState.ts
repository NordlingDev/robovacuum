import React from "react";

export type RobotStateContextValue = [
    robotState: RV.RobotState,
    setRobotState: React.Dispatch<React.SetStateAction<RV.RobotState>>,
];

export const RobotStateContext = React.createContext<RobotStateContextValue>([
    {
        running: false,
        paused: false,
        speed: 500,
        position: { x: 0, y: 0 },
        timeElapsed: 0,
    },
    () => undefined,
]);
