import React from "react";

import { MessageProps } from "./message.props";
import * as sc from "./message.styled";

export const Message: RV.Component<MessageProps> = ({
    className,
    style,
    children,
    type = "info",
    title,
}) => {
    return (
        <sc.Root className={className} style={style} $type={type} data-testid="message">
            {title && <sc.Title data-testid="message-title">{title}</sc.Title>}
            <sc.Content data-testid="message-content">{children}</sc.Content>
        </sc.Root>
    );
};
