/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

describe(" Two-line_Formate_Pre-filled_components_firestitch", () => {
  //Test case "Two-line format, pre-filled"
  it("Two-line format, pre-filled  !", () => {
    cy.visit(Cypress.env("url"));

    cy.get("[data-cy='two-line-format'] .editable").dblclick();
    cy.get("mat-dialog-container .name input").should("have.value", "CN Tower");
    cy.get(".mat-dialog-container .street input").should(
      "have.value",
      "301 Front Street West"
    );
    cy.get(".mat-dialog-container .city input").should("have.value", "Toronto");
    cy.get(".mat-dialog-container .region input").should(
      "have.value",
      "Ontario"
    );
    cy.get(".mat-dialog-container .country input").should(
      "have.value",
      "Canada"
    );
    cy.get(".mat-dialog-container .zip input").should("have.value", "M5V 2T6");

    cy.get("mat-dialog-container [type='submit']:disabled").should(
      "be.disabled"
    );
    cy.contains("Cancel").click({ force: true });

    cy.get("[data-cy='two-line-format'] .editable").then(function (text) {
      cy.log(text.text());
    });
  });
});
