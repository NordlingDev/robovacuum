import React from "react";
import * as icons from "react-feather";
import _ from "lodash";

import { IconProps } from "./icon.props";
import * as sc from "./icon.styled";

function getIconComponent(icon: string): (typeof Component) | null {
    const camelCase = _.camelCase(icon);
    const pascalCase = camelCase[0].toUpperCase() + camelCase.slice(1) as keyof typeof icons;
    const Component = icons[pascalCase];

    return Component || null;
}

export const Icon: RV.Component<IconProps> = ({
    className,
    style,
    icon,
}) => {
    const IconComponent = React.useMemo(() => getIconComponent(icon), [icon]);

    if(!IconComponent) {
        return null;
    }

    return (
        <sc.Root className={className} style={style} data-testid="icon">
            <IconComponent />
        </sc.Root>
    );
};
