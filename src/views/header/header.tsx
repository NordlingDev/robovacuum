import React from "react";

import { HeaderProps } from "./header.props";
import * as sc from "./header.styled";

export const Header: RV.Component<HeaderProps> = ({
    className,
    style,
}) => {
    return (
        <sc.Root className={className} style={style}>
            <sc.Left>
                <sc.AppName>
                    <strong>Robo</strong>Vacuum
                </sc.AppName>
            </sc.Left>
            <sc.Right></sc.Right>
        </sc.Root>
    );
};
