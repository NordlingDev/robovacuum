import React from "react";
import { mount } from "@cypress/react";

import { App } from "~/app";

describe("App", () => {
    it("renders the app", () => {
        cy.viewport(760, 900);

        mount(<App />);

        cy.get("div")
            .contains("RoboVacuum");
    });

    it("toggles color scheme back and forth", () => {
        cy.viewport(760, 900);

        mount(<App />);

        cy.get(`[data-testid="colorSchemeSwitch"]`)
            .click()
            .wait(3000)
            .click();
    });

    it("runs the robot with faster speed", () => {
        cy.viewport(760, 900);

        // Run the robot 
        mount(<App robotSpeed={1} />);

        // Start cleaning
        cy.get("button")
            .contains(/clean/i)
            .click();
        
        // Wait for 3 seconds. The robot moves randomly accross the room, so we will never know when it finishes.
        cy.wait(3000);

        // Pause the robot
        cy.get("button")
            .contains(/pause/i)
            .click();
        
        // Reset the room
        cy.wait(1000)
            .get("button")
            .contains(/reset/i)
            .click();
    });
});
