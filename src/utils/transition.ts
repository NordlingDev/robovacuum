const DEFAULT_DELAY = 0;
const DEFAULT_EASE = "ease-in-out";

export enum TransitionDuration {
    Fast = 50,
    Medium = 150,
    Slow = 300,
}

export interface TransitionOptions {
    duration: number;
    delay: number;
    ease: string;
}

const defaultOptions: TransitionOptions = {
    duration: TransitionDuration.Fast,
    delay: DEFAULT_DELAY,
    ease: DEFAULT_EASE,
};

interface TransitionFn {
    (props: string | string[], options?: Partial<TransitionOptions>): string;
    Duration: typeof TransitionDuration;
}

export const transition: TransitionFn = (props, options) => {
    props = typeof props === "string" ? [props] : props;
    const { duration, delay, ease }: TransitionOptions = {
        ...defaultOptions,
        ...options,
    };

    return props.map((prop) => (
        [
            prop,
            duration + "ms",
            delay > 0 ? delay + "ms" : "",
            ease,
        ].filter(Boolean).join(" ")
    )).join(", ");
};

transition.Duration = TransitionDuration;
