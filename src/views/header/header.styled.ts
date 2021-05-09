import styled, { css } from "styled-components";

import { styles } from "~/config";
import { color, conditional, transition } from "~/utils";

export const Root = styled.header`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    padding: ${styles.spacing}px;
`;

export const Left = styled.div`
    margin-right: auto;
`;

export const Right = styled.div`
    margin-left: auto;
`;

export const AppName = styled.div`
    font-size: 24px;
    font-style: italic;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: -1px;
    user-select: none;
    transition: ${transition("color", {
        duration: transition.Duration.Medium,
    })};

    strong {
        color: ${color("primary")};
        font-weight: 600;
    }

    ${({ theme }) => css`
        color: ${conditional(theme.colorScheme, {
            dark: color("light_darker"),
            light: color("dark_lighter"),
        })};
    `}
`;
