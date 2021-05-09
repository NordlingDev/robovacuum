import React from "react";
import { ThemeContext } from "styled-components";

import { ConfigContext } from "~/contexts";

import { AppProps } from "./app.props";
import * as sc from "./app.styled";

export const App: RV.Component<AppProps> = () => {
    const configContextValue = React.useState<RV.Config>({
        colorScheme: "dark",
        roomDimensions: { x: 10, y: 10 },
        floorSize: 64,
    });
    const [{ colorScheme }] = configContextValue;
    const theme = React.useMemo<RV.Theme>(() => ({ colorScheme }), [colorScheme]);

    return (
        <ConfigContext.Provider value={configContextValue}>
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
        </ConfigContext.Provider>
    );
};
