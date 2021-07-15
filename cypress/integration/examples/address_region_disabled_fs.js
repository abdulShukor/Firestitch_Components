/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

describe("Address_Region_Disabled", () => {
  // Test case "Address Region, disabled"
  it("Address Region, disabled!", () => {
    cy.visit(Cypress.env("url"));
    cy.get("[data-cy='address-region-disabled'] .country  input:disabled")
      .should("be.disabled")
      .and("have.value", "Canada");
    cy.get("[data-cy='address-region-disabled'] .region  input:disabled")
      .should("be.disabled")
      .and("have.value", "Ontario");
  });
});
