/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

describe("Address_Region_Required", () => {
  // Test case "Address Region, required"
  it("Address Region, required!", () => {
    cy.visit(Cypress.env("url"));
    cy.get("[name='Address Region, required']");
    cy.get("[name='Address Region, required'] .country").type("Canada");
    cy.get("[name='Address Region, required'] .region").type("Ontario");
    cy.contains("Ontario").click();
    cy.get("[name='Address Region, required'] .region").clear();
    cy.get("[name='Address Region, required'] .region").clear();
    cy.get("[name='Address Region, required'] .region").type("Ontario");
    cy.contains("Ontario").click();
    cy.get("[name='Address Region, required'] .country input").should(
      "have.value",
      "Canada"
    );
    cy.contains("CA, ON");
  });
});
