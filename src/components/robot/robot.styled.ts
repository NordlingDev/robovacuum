import styled, { css, keyframes } from "styled-components";

import { color, conditional, transition } from "~/utils";

import { RobotStatus } from "./robot.status";

export const Root = styled.div<{ $size: number }>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: ${color("robot_body")};
    border: 4px solid ${color("white", 0.2)};
    border-radius: 50%;

    ${({ $size }) => css`
        width: ${$size}px;
        height: ${$size}px;
        box-shadow: 0 0 ${$size * 0.25}px ${color("black", 0.1)};
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
            on: color("robot_on"),
            off: color("black", 0.25),
            idle: color("robot_idle"),
        })};
        animation: ${StatusIndicatorKeyframes} 1000ms ease-in-out infinite;
    `}
`;
