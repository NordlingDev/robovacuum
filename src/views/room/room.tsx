import React from "react";

import { RoomProps } from "./room.props";
import * as sc from "./room.styled";

export const Room: RV.Component<RoomProps> = ({
    className,
    style,
}) => {
    return (
        <sc.Root className={className} style={style}>
            <sc.ControlPanel>
                <sc.ControlPanelLeft>
                    <sc.Button type="primary" label="Clean" />
                </sc.ControlPanelLeft>
                <sc.ControlPanelRight></sc.ControlPanelRight>
            </sc.ControlPanel>

            <sc.Grid
                sizeX={10}
                sizeY={10}
                renderCell={({ x, y }) => `[${x},${y}]`}
            />
        </sc.Root>
    );
};