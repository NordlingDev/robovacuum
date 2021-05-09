import styled, { css } from "styled-components";

export const Root = styled.div`
    display: flex;
    position: relative;
`;

export const Row = styled.div`
    display: flex;
`;

export const Cells = styled.div<{ $cellSpacing: number }>`
    ${({ $cellSpacing }) => css`
        margin: -${$cellSpacing * 0.5}px;
    `}
`;

export const Cell = styled.div<{ $cellSpacing: number }>`
    position: relative;

    ${({ $cellSpacing }) => css`
        padding: ${$cellSpacing * 0.5}px;
    `}
`;
