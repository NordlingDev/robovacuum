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

export const Message = styled(components.Message)`
    position: absolute;
    bottom: -${styles.spacing * 0.5}px;

    p {
        &:first-child { margin-top: 0; }
        &:last-child { margin-bottom: 0; }
    }

    strong {
        font-weight: 600;
    }
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

export const CleanButton = styled(Button).attrs(() => ({
    type: "success",
    icon: "power",
}))`
    width: 130px;
`;

export const PauseButton = styled(Button).attrs(() => ({
    type: "warning",
    icon: "power",
}))`
    width: 130px;
`;

export const ResetButton = styled(Button).attrs(() => ({
    type: "secondary",
    icon: "refresh-cw",
}))``;

export const ValueDisplay = styled(components.ValueDisplay)<{ $dim: boolean }>`
    &:not(:last-child) {
        margin-right: ${styles.spacing}px;
    }

    ${({ $dim }) => $dim && css`
        opacity: 0.25;
    `}
`;

export const Floor = styled.div<{ $dim: boolean }>`
    position: relative;
    width: 100%;

    ${({ $dim }) => $dim && css`
        opacity: 0.25;
        filter: saturate(0%);
    `}
`;

export const FloorGrid = styled(components.Grid)<{ $finished: boolean }>`
    ${({ $finished }) => $finished && css`
        opacity: 0.25;
    `}
`;

export const FloorTile = styled(components.FloorTile)``;

export const RobotContainer = styled.div<{ $floorSize: number; $speed?: number }>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0; left: 0;

    ${({ $floorSize }) => css`
        width: ${$floorSize}px;
        height: ${$floorSize}px;
    `}

    ${({ $speed }) => $speed !== undefined && css`
        transition: ${transition(["top", "left"], {
            duration: $speed,
        })};
    `}
`;

export const Robot = styled(components.Robot)``;
