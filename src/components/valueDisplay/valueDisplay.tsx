import React from "react";

import { ValueDisplayProps } from "./valueDisplay.props";
import * as sc from "./valueDisplay.styled";

export const ValueDisplay: RV.Component<ValueDisplayProps> = ({
    className,
    style,
    label,
    value,
}) => {
    return (
        <sc.Root className={className} style={style} data-testid="valueDisplay">
            <sc.Label data-testid="valueDisplay-label">{label}</sc.Label>
            <sc.Value data-testid="valueDisplay-value">{value}</sc.Value>
        </sc.Root>
    );
};
