import React from "react";

export interface GridProps extends RV.ComponentProps {
    sizeX: number;
    sizeY: number;
    cellSpacing?: number;
    renderCell: (position: RV.Point2D) => React.ReactNode;
}
