export const createMatrix = <T = any>(
    sizeX: number,
    sizeY: number,
    valueFactory: (position: RV.Point2D) => T
): RV.Matrix<T> => {
    const rows = Array.from(Array(sizeY));

    return rows.map((_, y) => {
        const row = Array.from(Array(sizeX));
        
        return row.map((_, x) => valueFactory({ x, y }));
    });
};
