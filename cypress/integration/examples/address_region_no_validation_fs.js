/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

describe("Address_Region_No_Validation_components_firestitch", () => {
  // Test case "Address Region, no validation, horizontal"
  it("Address Region, no validation, horizontal!", () => {
    cy.visit(Cypress.env("url"));
    cy.get(
      "[name='Address Region, no validation, horizontal'] .country input"
    ).type("Canada");
    cy.contains("Canada").click();

    cy.get(
      "[name='Address Region, no validation, horizontal'] .region input"
    ).type("Ontario");
    cy.contains("Ontario").click();
    cy.get(
      "[name='Address Region, no validation, horizontal'] .country input"
    ).clear();
    cy.get(
      "[name='Address Region, no validation, horizontal'] .region input"
    ).clear();
    cy.get(
      "[name='Address Region, no validation, horizontal'] .region input"
    ).type("Ontario");
    cy.contains("Ontario").click();
    cy.get(
      "[name='Address Region, no validation, horizontal'] .country input"
    ).should("have.value", "Canada");
  });
});
