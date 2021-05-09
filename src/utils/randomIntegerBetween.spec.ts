import { randomIntegerBetween } from "./randomIntegerBetween";

describe("randomIntegerBetween", () => {
    it("generates within range", () => {
        const length = 10;
        const ints = Array.from(Array(length))
            .map((_, i) => randomIntegerBetween(i, length));
        
        ints.forEach((int, index) => {
            expect(int).toBeLessThanOrEqual(length);
            expect(int).toBeGreaterThanOrEqual(index);
        });
    });
});
