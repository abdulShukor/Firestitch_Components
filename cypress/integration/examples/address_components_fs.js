/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
require("cypress-xpath");

describe("address_components_firestitch", () => {
    it("Test_address_components_firestitch!", () => {
        cy.visit("http://address.components.firestitch.com/")
        cy.get('#mat-input-0').type("Toronto")
        cy.contains("Toronto, ON, Canada").click()
        cy.get('kitchen-sink > .fs-form > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.contains("Saved")
    

    });
});