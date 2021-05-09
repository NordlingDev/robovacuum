import React from "react";

import { ColorSchemeSwitchProps } from "./colorSchemeSwitch.props";
import * as sc from "./colorSchemeSwitch.styled";

export const ColorSchemeSwitch: RV.Component<ColorSchemeSwitchProps> = ({
    className,
    style,
    value,
    onChange,
}) => {
    return (
        <sc.Root
            className={className}
            style={style}
            onClick={onChange && (() => onChange(value === "dark" ? "light" : "dark"))}
            data-testid="colorSchemeSwitch"
        >
            <sc.Icon icon="sun" />
            <sc.Icon icon="moon" />
            <sc.Knob $value={value} />
        </sc.Root>
    );
};
