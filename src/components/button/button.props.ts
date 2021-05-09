import { ButtonType } from "./button.type";

export interface ButtonProps extends RV.ComponentProps {
    label: string;
    icon?: string;
    type?: ButtonType;
    colorScheme?: RV.ColorScheme;
    onPress?: () => void;
}
