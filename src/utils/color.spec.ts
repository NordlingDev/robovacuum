import { color } from "./color";

describe("color", () => {
    it("returns HEX if opacity is not provided", () => {
        const value = color("white");
        expect(value).toBe("#ffffff");
    });

    it("returns RGBA if opacity is provided", () => {
        const value = color("white", 0.5);
        expect(value).toBe("rgba(255, 255, 255, 0.5)");
    });

    it("returns empty string if color name is invalid", () => {
        const value = color("foo" as any);
        expect(value).toBe("");
    });
});
