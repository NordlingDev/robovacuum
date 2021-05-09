import React from "react";

import { useConfig } from "~/hooks";

import { HeaderProps } from "./header.props";
import * as sc from "./header.styled";

export const Header: RV.Component<HeaderProps> = ({
    className,
    style,
}) => {
    const [{ colorScheme }, setConfig] = useConfig();

    return (
        <sc.Root className={className} style={style} data-testid="header">
            <sc.Left>
                <sc.AppName>
                    <strong>Robo</strong>Vacuum
                </sc.AppName>
            </sc.Left>
            <sc.Right>
                <sc.ColorSchemeSwitch
                    value={colorScheme}
                    onChange={(newColorScheme) => {
                        setConfig((prev) => ({ ...prev, colorScheme: newColorScheme }));
                    }}
                />
            </sc.Right>
        </sc.Root>
    );
};
