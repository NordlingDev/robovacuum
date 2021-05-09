import { createMatrix } from "./createMatrix";

describe("createMatrix", () => {
    it("creates a 2x2 matrix", () => {
        const matrix = createMatrix(2, 2, ({ x, y }) => {
            return `${x}-${y}`;
        });

        expect(matrix).toEqual([
            ["0-0", "1-0"],
            ["0-1", "1-1"],
        ]);
    });

    it("creates a 2x4 matrix", () => {
        const matrix = createMatrix(2, 4, ({ x, y }) => {
            return `${x}-${y}`;
        });

        expect(matrix).toEqual([
            ["0-0", "1-0"],
            ["0-1", "1-1"],
            ["0-2", "1-2"],
            ["0-3", "1-3"],
        ]);
    });
});
