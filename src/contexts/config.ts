import React from "react";

export type ConfigContextValue = [
    config: RV.Config,
    setConfig: React.Dispatch<React.SetStateAction<RV.Config>>,
];

export const ConfigContext = React.createContext<ConfigContextValue>([
    {
        colorScheme: "dark",
    },
    () => undefined,
]);
