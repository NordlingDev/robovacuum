import React from "react";

import { RoomProps } from "./room.props";
import * as sc from "./room.styled";

export const Room: RV.Component<RoomProps> = ({
    className,
    style,
}) => {
    return (
        <sc.Root className={className} style={style}>
            Room View
        </sc.Root>
    );
};
