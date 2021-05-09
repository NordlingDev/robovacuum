import React from "react";

export type ConfigContextValue = [
    config: RV.Config,
    setConfig: React.Dispatch<React.SetStateAction<RV.Config>>,
];

export const ConfigContext = React.createContext<ConfigContextValue>([
    {
        colorScheme: "dark",
        roomDimensions: { x: 10, y: 10 },
        floorSize: 64,
    },
    () => undefined,
]);
