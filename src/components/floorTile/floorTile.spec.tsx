import React from "react";
import { cleanup, render } from "@testing-library/react";

import { FloorTile } from "~/components";

describe("FloorTile", () => {
    afterEach(cleanup);

    it("renders to the document", () => {
        const { getByTestId } = render(<FloorTile status="clean" />);
        expect(getByTestId("floorTile")).toBeInTheDocument();
    });
});
