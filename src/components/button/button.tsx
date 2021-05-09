import React from "react";

import { useConfig } from "~/hooks";

import { ButtonProps } from "./button.props";
import * as sc from "./button.styled";

export const Button: RV.Component<ButtonProps> = ({
    className,
    style,
    label,
    icon,
    type = "primary",
    colorScheme,
    onPress,
}) => {
    const [config] = useConfig();

    return (
        <sc.Root
            className={className}
            style={style}
            onClick={onPress}
            $type={type}
            $colorScheme={colorScheme || config.colorScheme}
            data-testid="button"
        >
            <sc.Inner>
                {icon && <sc.Icon icon={icon} />}
                <sc.Label data-testid="button-label">{label}</sc.Label>
            </sc.Inner>
        </sc.Root>
    );
};
