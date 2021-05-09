const COLOR_SUCCESS = "#228e6c";

export const colors = Object.freeze({
    primary: "#e21467",
    info: "#03aad6",
    success: COLOR_SUCCESS,
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
    floor_clean: COLOR_SUCCESS,
    floor_dirty: "#8c6450",
    robot_body: "#88909c",
    robot_on: "#16e260",
    robot_idle: "#ffd223",
});

export type ColorName = keyof (typeof colors);
