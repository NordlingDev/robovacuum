import styled, { css } from "styled-components";
import { styles } from "~/config";

import { Icon as IconComponent } from "~/components/icon";
import { color, conditional } from "~/utils";

import { ButtonType } from "./button.type";

export const Root = styled.button.attrs(() => ({
    type: "button",
}))<{ $type: ButtonType; $colorScheme: RV.ColorScheme }>`
    position: relative;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    outline: 0;
    border: 0;
    border-radius: ${styles.spacing * 0.5}px;
    overflow: hidden;
    cursor: pointer;

    &::before {
        content: "";
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        background: ${color("white")};
        opacity: 0;
        pointer-events: none;
    }

    // States
    &:focus-visible {
        box-shadow: 0 0 0 4px ${color("info")};
    }

    ${({ $type, $colorScheme }) => css`
        background: ${conditional($type, {
            primary: color("primary"),
            success: color("success"),
            warning: color("warning"),
            danger: color("danger"),
            secondary: conditional($colorScheme, {
                dark: color("dark_lighter"),
                light: color("light_darker"),
            }),
        })};
        color: ${conditional($type, {
            primary: color("white"),
            success: color("white"),
            warning: color("white"),
            danger: color("white"),
            secondary: conditional($colorScheme, {
                dark: color("light_darker"),
                light: color("dark_lighter"),
            }),
        })};

        // States
        &:hover {
            &::before {
                opacity: ${conditional($type, {
                    primary: 0.1,
                    success: 0.1,
                    warning: 0.1,
                    danger: 0.1,
                    secondary: conditional($colorScheme, {
                        dark: 0.05,
                        light: 0.25,
                    }),
                })};
            }
        }
    `}
`;

export const Inner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 44px;
    padding: 0 ${styles.spacing * 0.75}px;
`;

export const Icon = styled(IconComponent)`
    width: 20px;
    height: 20px;
    font-size: 20px;
    margin-right: ${styles.spacing * 0.5}px;
`;

export const Label = styled.span`
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;
