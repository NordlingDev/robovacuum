import colorString from "color-string";

import { colors, ColorName } from "~/config/colors";

export const color = (name: ColorName, opacity?: number): string => {
    const value = colors[name];

    if(!value) {
        return "";
    }

    if(opacity !== undefined) {
        const rgba = colorString.get.rgb(value);

        if(!rgba) {
            return value;
        }

        rgba[3] = opacity;
        return colorString.to.rgb(rgba);
    }

    return value;
};
