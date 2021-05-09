import { transition } from "./transition";

describe("transition", () => {
    const DEFAULT_DURATION = transition.Duration.Fast;

    it("returns transition with default options", () => {
        const value = transition("all");
        expect(value).toBe(`all ${DEFAULT_DURATION}ms ease-in-out`);
    });

    it("returns transition with custom options", () => {
        const value = transition("all", {
            delay: 150,
            duration: 300,
        });
        expect(value).toBe(`all 300ms 150ms ease-in-out`);
    });
});
