import React from "react";
import { cleanup, render } from "@testing-library/react";

import { Grid } from "~/components";

describe("Grid", () => {
    afterEach(cleanup);

    it("renders to the document with 4 cells", () => {
        const renderCell = jest.fn(() => null);
        const { getByTestId } = render(<Grid sizeX={2} sizeY={2} renderCell={renderCell} />);

        expect(getByTestId("grid")).toBeInTheDocument();
        expect(renderCell).toHaveBeenCalledTimes(4);
    });
});
