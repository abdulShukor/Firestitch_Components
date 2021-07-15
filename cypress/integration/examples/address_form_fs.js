/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

describe("Address_Form_components_firestitch", () => {
  //  //Test case "Address Form"
  it("Address Form!", () => {
    cy.visit(Cypress.env("url"));
    cy.get("[name='Address Form'] .name").type("Toronto").click();
    cy.get("[name='Address Form'] .street").type("215 Markham Road");
    cy.contains("215 Markham Road").click();
    cy.get("[name='Address Form'] .address2").type("1470 Midland");
    cy.get("[name='Address Form'] .address3").type("1470 Midland");
    cy.get("[name='Address Form'] .city input ").should(
      "have.value",
      "Toronto"
    );
    cy.get("[name='Address Form'] .region input").should(
      "have.value",
      "Ontario"
    );
    // cy.contains("Ontario").click();
    cy.get("[name='Address Form'] .country input").should(
      "have.value",
      "Canada"
    );
    cy.get("[name='Address Form'] .zip input").should("have.value", "M1J 3C3");
  });

  it("Validation: province and country!", () => {
    cy.get("[name='Address Form'] .region input ").clear();
    cy.get("[name='Address Form'] .country input").clear();
    cy.get("[name='Address Form'] .region input ").type("Alberta");
    cy.contains("Alberta").click();
    cy.get("[name='Address Form'] .country input").should(
      "have.value",
      "Canada"
    );
  });
  it("Validation: when you clear country field then the province should be clear at the same time!", () => {
    cy.get("[name='Address Form'] .country input").clear();
    cy.get("[name='Address Form'] .region input ").should("be.empty");
  });
});
