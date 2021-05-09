import React from "react";

import { ConfigContext, ConfigContextValue } from "~/contexts";

export const useConfig = (): ConfigContextValue => React.useContext(ConfigContext);
