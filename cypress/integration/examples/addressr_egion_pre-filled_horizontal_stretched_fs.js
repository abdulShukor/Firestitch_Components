/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

describe("Address_Region_pre-filled_Horizontal_Stretched_Fs", () => {
  // Test case "Address Region, pre-filled, horizontal stretched"
  it("Address Region, pre-filled, horizontal stretched!", () => {
    cy.visit(Cypress.env("url"));
    cy.get(
      "[name='Address Region, pre-filled, horizontal stretched'] .country input"
    ).should("have.value", "Canada");
    cy.get(
      "[name='Address Region, pre-filled, horizontal stretched'] .region"
    ).type("Ontario");
    cy.contains("Ontario").click();
    cy.get(
      "[name='Address Region, pre-filled, horizontal stretched'] .country input"
    ).clear();
    cy.get(
      "[name='Address Region, pre-filled, horizontal stretched'] .region"
    ).clear();
    cy.get(
      "[name='Address Region, pre-filled, horizontal stretched'] .region"
    ).type("Alberta");
    cy.contains("Alberta").click();
    cy.get(
      "[name='Address Region, pre-filled, horizontal stretched'] .country input"
    ).should("have.value", "Canada");
  });
});
