import React from "react";

import { RobotStateContext, RobotStateContextValue } from "~/contexts";

export const useRobotState = (): RobotStateContextValue => React.useContext(RobotStateContext);
