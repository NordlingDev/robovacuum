import React from "react";
import { cleanup, render } from "@testing-library/react";

import { Icon } from "~/components";

describe("Icon", () => {
    afterEach(cleanup);

    it("renders to the document", () => {
        const { getByTestId } = render(<Icon icon="power" />);
        expect(getByTestId("icon")).toBeInTheDocument();
    });
});
