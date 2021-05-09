import React from "react";

import { MessageType } from "./message.type";

export interface MessageProps extends RV.ComponentProps {
    children?: React.ReactNode;
    type?: MessageType;
    title?: string;
}
