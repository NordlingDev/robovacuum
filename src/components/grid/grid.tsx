import React from "react";

import { createMatrix } from "~/utils";

import { GridProps } from "./grid.props";
import * as sc from "./grid.styled";

export const Grid: RV.Component<GridProps> = ({
    className,
    style,
    sizeX,
    sizeY,
    cellSpacing = 2,
    renderCell,
}) => {
    const cells = React.useMemo<RV.Matrix<React.ReactNode>>(() => {
        return createMatrix(sizeX, sizeY, renderCell);
    }, [sizeX, sizeY, renderCell]);

    return (
        <sc.Root className={className} style={style} data-testid="grid">
            <sc.Cells $cellSpacing={cellSpacing}>
                {cells.map((row, y) => (
                    <sc.Row key={`row-${y}`}>
                        {row.map((node, x) => (
                            <sc.Cell
                                key={`cell-${x}-${y}`}
                                $cellSpacing={cellSpacing}
                            >
                                {node}
                            </sc.Cell>
                        ))}
                    </sc.Row>
                ))}
            </sc.Cells>
        </sc.Root>
    );
};
