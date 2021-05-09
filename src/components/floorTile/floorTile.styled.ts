import styled, { css } from "styled-components";

import { styles } from "~/config";
import { color, conditional } from "~/utils";

import { FloorTileStatus } from "./floorTile.status";

export const Root = styled.div<{ $status: FloorTileStatus; $size: number }>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${styles.spacing * 0.5}px;

    ${({ $status }) => css`
        background: ${conditional($status, {
            clean: color("floor_clean"),
            dirty: color("floor_dirty"),
        })};
    `}

    ${({ $size }) => css`
        width: ${$size}px;
        height: ${$size}px;
    `}
`;
