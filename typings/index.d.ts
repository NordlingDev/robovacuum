/**
 * This is the namespace for RoboVacuum. It includes various types that
 * can be reused throughout the project.
 */
declare namespace RV {
    export interface Component<P = Record<string, unknown>> {
        (props: P, context?: any): React.ReactElement<any, any> | null;
    }

    export interface ComponentProps {
        className?: string;
        style?: React.CSSProperties;
    }

    export type ColorScheme = "dark" | "light";

    export interface Point2D {
        x: number;
        y: number;
    }

    export type Matrix<T = any> = T[][];

    export interface Config {
        colorScheme: ColorScheme;
        roomDimensions: RV.Point2D;
        floorSize: number;
    }

    export interface Theme {
        colorScheme: ColorScheme;
    }
}
