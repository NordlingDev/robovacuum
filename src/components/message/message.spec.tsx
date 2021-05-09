import React from "react";
import { cleanup, render } from "@testing-library/react";

import { Message } from "~/components";

describe("Message", () => {
    afterEach(cleanup);

    it("renders to the document with label and value", () => {
        const { getByTestId } = render(<Message title="Title">Foo</Message>);

        expect(getByTestId("message")).toBeInTheDocument();
        expect(getByTestId("message-title")).toHaveTextContent("Title");
        expect(getByTestId("message-content")).toHaveTextContent("Foo");
    });
});
