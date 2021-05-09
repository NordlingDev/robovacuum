import styled, { css } from "styled-components";

import { Icon as IconComponent } from "~/components/icon";
import { color, conditional, transition } from "~/utils";

const SPACING = 4;
const SIZE = 32;
const SIZE_INNER = SIZE - (SPACING * 2);

export const Root = styled.button.attrs(() => ({
    type: "button",
}))`
    position: relative;
    display: inline-flex;
    padding: ${SPACING}px;
    outline: 0;
    border: 0;
    border-radius: ${(SIZE / 2) + 2}px;
    cursor: pointer;
    transition: ${transition("background")};

    ${({ theme }) => css`
        background: ${conditional(theme.colorScheme, {
            dark: color("white", 0.15),
            light: color("black", 0.1),
        })};

        &:hover {
            background: ${conditional(theme.colorScheme, {
                dark: color("white", 0.2),
                light: color("black", 0.15),
            })};
        }
    `}
`;

export const Icon = styled(IconComponent)`
    width: ${SIZE_INNER}px;
    height: ${SIZE_INNER}px;
    color: ${color("warning")};
    font-size: 16px;
`;

export const Knob = styled.div<{ $value: RV.ColorScheme }>`
    position: absolute;
    width: ${SIZE_INNER}px;
    height: ${SIZE_INNER}px;
    border-radius: 50%;
    transition: ${transition(["background", "transform"], {
        duration: transition.Duration.Medium,
    })};

    ${Root}:focus-visible & {
        box-shadow: 0 0 0 ${SPACING}px ${color("info")};
    }

    ${({ theme }) => css`
        background: ${conditional(theme.colorScheme, {
            dark: color("light_darker"),
            light: color("dark_lighter"),
        })};
    `}

    ${({ $value }) => $value === "light" && css`
        transform: translateX(${SIZE_INNER}px);
    `}
`;
