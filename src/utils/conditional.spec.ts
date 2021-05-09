import { conditional } from "./conditional";

describe("conditional", () => {
    it("returns the correct value", () => {
        const value = conditional("foo" as string, {
            foo: 0,
            bar: 1,
            faz: 2,
        });
        expect(value).toBe(0);
    });
});
