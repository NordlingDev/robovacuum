import styled, { css } from "styled-components";

import * as components from "~/components";
import { styles } from "~/config";
import { color, conditional, transition } from "~/utils";

export const Root = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: ${styles.spacing}px;
    border-radius: ${styles.spacing}px;
    transition: ${transition("background", {
        duration: transition.Duration.Slow,
    })};

    ${({ theme }) => css`
        background: ${conditional(theme.colorScheme, {
            dark: color("dark_darker"),
            light: color("light"),
        })};
    `}
`;

export const ControlPanel = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    margin-bottom: ${styles.spacing}px;
`;

export const ControlPanelLeft = styled.div`
    display: flex;
    margin-right: auto;
`;

export const ControlPanelRight = styled.div`
    display: flex;
    margin-left: auto;
`;

export const Button = styled(components.Button)`
    &:not(:last-child) {
        margin-right: ${styles.spacing * 0.5}px;
    }
`;

export const Floor = styled.div`
    position: relative;
    width: 100%;
`;

export const FloorGrid = styled(components.Grid)``;

export const FloorTile = styled(components.FloorTile)``;
