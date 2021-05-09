import React from "react";
import { ThemeContext } from "styled-components";

import { ConfigContext, RobotStateContext } from "~/contexts";

import { AppProps } from "./app.props";
import * as sc from "./app.styled";

export const App: RV.Component<AppProps> = ({
    robotSpeed = 500,
}) => {
    const configContextValue = React.useState<RV.Config>({
        colorScheme: "dark",
        roomDimensions: { x: 10, y: 10 },
        floorSize: 64,
    });
    const [{ colorScheme }] = configContextValue;
    const theme = React.useMemo<RV.Theme>(() => ({ colorScheme }), [colorScheme]);
    const robotStateContextValue = React.useState<RV.RobotState>(() => {
        return {
            running: false,
            paused: false,
            speed: robotSpeed,
            position: { x: 0, y: 0 },
            timeElapsed: 0,
        };
    });

    return (
        <ConfigContext.Provider value={configContextValue}>
            <RobotStateContext.Provider value={robotStateContextValue}>
                <ThemeContext.Provider value={theme}>

                    <sc.GlobalStyle />

                    <sc.Root>
                        <sc.Inner>
                            <sc.Header />

                            <sc.Main>
                                <sc.Room />
                            </sc.Main>
                        </sc.Inner>
                    </sc.Root>

                </ThemeContext.Provider>
            </RobotStateContext.Provider>
        </ConfigContext.Provider>
    );
};
