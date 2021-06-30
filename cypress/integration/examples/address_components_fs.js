/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
require("cypress-xpath");

describe("address_components_firestitch", () => {
  it("Address Picker!", () => {
    cy.visit("http://address.components.firestitch.com/");
    cy.get("#mat-input-0").type("Toronto");
    cy.contains("Toronto, ON, Canada").click();
    cy.contains("Save").dblclick();
    cy.contains("Saved");

    cy.get(".mat-form-field-infix.ng-tns-c108-0").click();

    cy.get("#mat-input-27").dblclick().type("27");
    cy.get("#mat-input-21").dblclick().type("21");
    cy.get("#mat-input-22").dblclick().type("22");
    cy.get("#mat-input-23").dblclick().type("23");
    cy.get("#mat-input-24").dblclick().type("24");
    cy.get("#mat-input-25").dblclick().type("25");
    cy.get("#mat-input-26").dblclick().type("26");

    //cy.get('#mat-dialog-0').dblclick().type("Markham")
    cy.contains("Apply").click();
  });
});
