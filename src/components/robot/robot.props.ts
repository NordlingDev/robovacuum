import { RobotStatus } from "./robot.status";

export interface RobotProps extends RV.ComponentProps {
    size?: number;
    status?: RobotStatus;
}
