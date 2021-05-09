import React from "react";
import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "~/components";

describe("Button", () => {
    afterEach(cleanup);

    it("renders to the document", () => {
        const { getByTestId } = render(<Button label="Foo" />);
        expect(getByTestId("button")).toBeInTheDocument();
    });

    it("renders with label", () => {
        const { getByTestId } = render(<Button label="Foo" />);
        const buttonEl = getByTestId("button");

        expect(buttonEl).toBeInTheDocument();
        expect(buttonEl).toHaveTextContent("Foo");
    });

    it("renders with label and icon", () => {
        const { getByTestId } = render(<Button label="Foo" icon="power" />);
        const iconEl = getByTestId("icon");
        const labelEl = getByTestId("button-label");

        expect(iconEl.parentElement?.children[0]).toBe(iconEl);
        expect(labelEl.parentElement?.children[1]).toBe(labelEl);
    });

    it("fires onPress event", () => {
        const onPress = jest.fn();
        const { getByTestId } = render(<Button label="Foo" icon="power" onPress={onPress} />);

        userEvent.click(getByTestId("button"));

        expect(onPress).toHaveBeenCalledTimes(1);
    });
});
