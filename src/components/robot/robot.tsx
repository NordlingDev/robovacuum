import React from "react";

import { RobotProps } from "./robot.props";
import * as sc from "./robot.styled";

export const Robot: RV.Component<RobotProps> = ({
    className,
    style,
    size = 48,
    status = "off",
}) => {
    return (
        <sc.Root className={className} style={style} $size={size} data-testid="robot">
            <sc.Indicator $status={status} />
        </sc.Root>
    );
};
