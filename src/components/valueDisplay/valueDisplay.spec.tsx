import React from "react";
import { cleanup, render } from "@testing-library/react";

import { ValueDisplay } from "~/components";

describe("ValueDisplay", () => {
    afterEach(cleanup);

    it("renders to the document with label and value", () => {
        const { getByTestId } = render(<ValueDisplay label="Label" value="Value" />);

        expect(getByTestId("valueDisplay")).toBeInTheDocument();
        expect(getByTestId("valueDisplay-label")).toHaveTextContent("Label");
        expect(getByTestId("valueDisplay-value")).toHaveTextContent("Value");
    });
});
