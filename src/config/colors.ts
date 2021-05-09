export const colors = Object.freeze({
    primary: "#e21467",
    info: "#03aad6",
    success: "#228e6c",
    warning: "#dea216",
    danger: "#c12245",
    white: "#ffffff",
    black: "#000000",
    dark: "#1c2229",
    dark_darker: "#171b21",
    dark_lighter: "#2c333c",
    light: "#e1e5ea",
    light_darker: "#c8cdd4",
    light_lighter: "#ffffff",
});

export type ColorName = keyof (typeof colors);
