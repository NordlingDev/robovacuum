import React from "react";

import { useConfig } from "~/hooks";

import { RoomProps } from "./room.props";
import * as sc from "./room.styled";

const FLOOR_TILE_SPACING = 4;

export const Room: RV.Component<RoomProps> = ({
    className,
    style,
}) => {
    const [{ roomDimensions, floorSize }] = useConfig();

    return (
        <sc.Root className={className} style={style}>
            <sc.ControlPanel>
                <sc.ControlPanelLeft>
                    <sc.Button type="primary" label="Clean" />
                </sc.ControlPanelLeft>
                <sc.ControlPanelRight></sc.ControlPanelRight>
            </sc.ControlPanel>

            <sc.Floor>
                <sc.FloorGrid
                    sizeX={roomDimensions.x}
                    sizeY={roomDimensions.y}
                    cellSpacing={FLOOR_TILE_SPACING}
                    renderCell={() => (
                        <sc.FloorTile
                            status="dirty"
                            size={floorSize}
                        />
                    )}
                />
            </sc.Floor>
        </sc.Root>
    );
};
