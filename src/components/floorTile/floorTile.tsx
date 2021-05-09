import React from "react";

import { FloorTileProps } from "./floorTile.props";
import * as sc from "./floorTile.styled";

export const FloorTile: RV.Component<FloorTileProps> = ({
    className,
    style,
    children,
    status,
    size = 64,
}) => {
    return (
        <sc.Root
            className={className}
            style={style}
            $status={status}
            $size={size}
            data-testid="floorTile"
        >
            {children}
        </sc.Root>
    );
};
