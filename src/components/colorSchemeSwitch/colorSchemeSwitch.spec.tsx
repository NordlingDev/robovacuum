import React from "react";
import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ColorSchemeSwitch } from "~/components";

describe("ColorSchemeSwitch", () => {
    afterEach(cleanup);

    it("renders to the document", () => {
        const { getByTestId } = render(<ColorSchemeSwitch value="dark" />);
        expect(getByTestId("colorSchemeSwitch")).toBeInTheDocument();
    });

    it("fires onChange event with light value", (done) => {
        const onChange = jest.fn((newValue) => {
            expect(newValue).toBe("light");
            done();
        });
        const { getByTestId } = render(<ColorSchemeSwitch value="dark" onChange={onChange} />);

        userEvent.click(getByTestId("colorSchemeSwitch"));
    });

    it("fires onChange event with dark value", (done) => {
        const onChange = jest.fn((newValue) => {
            expect(newValue).toBe("dark");
            done();
        });
        const { getByTestId } = render(<ColorSchemeSwitch value="light" onChange={onChange} />);

        userEvent.click(getByTestId("colorSchemeSwitch"));
    });
});
