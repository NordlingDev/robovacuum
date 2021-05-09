import styled, { css, keyframes } from "styled-components";

import { color, conditional, transition } from "~/utils";

import { RobotStatus } from "./robot.status";

export const Root = styled.div<{ $size: number }>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: ${color("light")};
    border: 4px solid ${color("light_darker")};
    border-radius: 50%;

    ${({ $size }) => css`
        width: ${$size}px;
        height: ${$size}px;
    `}
`;

const StatusIndicatorKeyframes = keyframes`
    0%   { opacity: 1; }
    50%  { opacity: 0.5; }
    100% { opacity: 1; }
`;

export const Indicator = styled.div<{ $status: RobotStatus }>`
    width: 25%;
    height: 25%;
    border-radius: 50%;
    transition: ${transition("background")};

    ${({ $status }) => $status && css`
        background: ${conditional($status, {
            on: color("success"),
            off: color("black", 0.25),
            idle: color("warning"),
        })};
        animation: ${StatusIndicatorKeyframes} 1000ms ease-in-out infinite;
    `}
`;
