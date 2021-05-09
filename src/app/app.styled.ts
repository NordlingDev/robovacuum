import styled, { css, createGlobalStyle } from "styled-components";

import { styles } from "~/config";
import { color, conditional, transition } from "~/utils";
import * as views from "~/views";

export const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        line-height: 1;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        font-weight: 400;
        cursor: default;

        ${({ theme }) => css`
            background: ${conditional(theme.colorScheme, {
                dark: color("dark"),
                light: color("light_lighter"),
            })};
            color: ${conditional(theme.colorScheme, {
                dark: color("light"),
                light: color("dark"),
            })};
        `}
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    p {
        line-height: 1.6;
    }
`;

export const Root = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: ${styles.spacing}px;
    transition: ${transition("background", {
        duration: transition.Duration.Medium,
    })};

    ${({ theme }) => css`
        background: ${conditional(theme.colorScheme, {
            dark: color("dark"),
            light: color("light_lighter"),
        })};
        color: ${conditional(theme.colorScheme, {
            dark: color("light"),
            light: color("dark"),
        })};
    `}
`;

export const Inner = styled.div``;

export const Header = styled(views.Header)`
    margin-bottom: ${styles.spacing}px;
`;

export const Main = styled.main`
    margin-bottom: ${styles.spacing}px;
`;

export const Room = styled(views.Room)``;
