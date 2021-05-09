import styled, { css } from "styled-components";

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
