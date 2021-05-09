import { Ticker } from "./ticker";
import { TickerCallbackInfo } from "./ticker.callback";

describe("Ticker", () => {
    let ticker: Ticker;

    afterEach(() => {
        ticker.destroy();
    });

    it("ticks 5 times with 500ms interval", (done) => {
        const callback = jest.fn(({ tick }: TickerCallbackInfo) => {
            if(tick === 4) {
                ticker.stop();
            }
        });

        ticker = new Ticker(callback, 500);
        ticker.start();

        setTimeout(() => {
            expect(callback).toHaveBeenCalledTimes(5);
            done();
        }, 3000);
    });
});
