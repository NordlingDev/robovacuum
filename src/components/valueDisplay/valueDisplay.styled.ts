import styled from "styled-components";
import { styles } from "~/config";

export const Root = styled.div``;

export const Label = styled.div`
    margin-bottom: ${styles.spacing * 0.25}px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    opacity: 0.5;
`;

export const Value = styled.div`
    font-size: 24px;
`;
