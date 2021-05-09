import React from "react";

import { FloorTileStatus } from "./floorTile.status";

export interface FloorTileProps extends RV.ComponentProps {
    children?: React.ReactNode;
    status: FloorTileStatus;
    size?: number;
}
