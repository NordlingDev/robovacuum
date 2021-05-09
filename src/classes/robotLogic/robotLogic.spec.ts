import { RobotLogic } from "./robotLogic";

describe("RobotLogic", () => {
    let robotLogic: RobotLogic;

    afterEach(() => {
        robotLogic.destroy();
    });

    it("moves 5 times in 2500ms", (done) => {
        robotLogic = new RobotLogic({
            maxPosition: { x: 3, y: 3 },
            speed: 500,
            onMove: ({ timeElapsed }) => {
                if(timeElapsed >= 2500) {
                    robotLogic.pause();
                }
            },
        });

        robotLogic.start();

        setTimeout(() => {
            expect(robotLogic.steps).toBe(5);
            robotLogic.stop();
            expect(robotLogic.steps).toBe(0);
            done();
        }, 3000);
    });
});
