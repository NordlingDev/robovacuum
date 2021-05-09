export type TickerCallback = (info: TickerCallbackInfo) => void;

export interface TickerCallbackInfo {
    timeNow: number;
    timeElapsed: number;
    tick: number;
}
