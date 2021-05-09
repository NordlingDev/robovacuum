import styled, { css } from "styled-components";

import { styles } from "~/config";
import { color } from "~/utils";

import { MessageType } from "./message.type";

export const Root = styled.div<{ $type: MessageType }>`
    padding: ${styles.spacing}px;
    color: ${color("white")};
    border-radius: ${styles.spacing * 0.5}px;
    box-shadow: 0 4px 24px ${color("black", 0.25)};

    ${({ $type }) => css`
        background: ${color($type)};
    `}
`;

export const Title = styled.div`
    margin-bottom: ${styles.spacing}px;
    font-size: 18px;
    font-weight: 600;
`;

export const Content = styled.div`
    font-size: 16px;
`;
