import React from "react";
import { cleanup, render } from "@testing-library/react";

import { Robot } from "~/components";

describe("Robot", () => {
    afterEach(cleanup);

    it("renders to the document", () => {
        const { getByTestId } = render(<Robot />);
        expect(getByTestId("robot")).toBeInTheDocument();
    });
});
