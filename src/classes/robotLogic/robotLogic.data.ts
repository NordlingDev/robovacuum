import { RobotLogicMoveInfo } from "./robotLogic.moveInfo";

export interface RobotLogicData {
    maxPosition: RV.Point2D;
    speed?: number;
    onMove?: (info: RobotLogicMoveInfo) => void;
}
