/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

describe(" Two-line_Formate_Pre-filled_components_firestitch", () => {
  //Test case "Two-line format, pre-filled"
  it("Two-line format, pre-filled  !", () => {
    cy.visit(Cypress.env("url"));

    cy.get("[name='Two-line format,  pre-filled'] .editable").then(function (
      text
    ) {
      const address = text.text();
      cy.log(address);
      const address_two_line_format =
        "CN Tower301 Front Street WestTorontoONM5V 2T6CA";
      if (address === address_two_line_format) {
        cy.log("Test passed:");
      } else {
        cy.log("Test fialed:");
        cy.contains("address does not match");
      }
    });

    cy.get("[name='Two-line format,  pre-filled'] .editable").dblclick();
    cy.get("mat-dialog-container .name input").should("have.value", "CN Tower");
    //.and("have.prop", "required");

    cy.get(".mat-dialog-container .street input").should(
      "have.value",
      "301 Front Street West"
    );
    // .and("have.prop", "required");

    cy.get(".mat-dialog-container .city input").should("have.value", "Toronto");
    //.and("have.prop", "required");

    cy.get(".mat-dialog-container .region input").should(
      "have.value",
      "Ontario"
    );
    cy.get(".mat-dialog-container .country input").should(
      "have.value",
      "Canada"
    );
    // .invoke("prop", "required", true);
    //.invoke("prop", "disabled", true);
    //.and("have.prop", "required");

    cy.get(".mat-dialog-container .zip input").should("have.value", "M5V 2T6");
    //.and("have.prop", "required");

    cy.get("mat-dialog-container [type='submit']:disabled").should(
      "be.disabled"
    );
    cy.contains("Cancel").click({ force: true });

    cy.get("[name='Two-line format,  pre-filled'] .editable").then(function (
      text
    ) {
      cy.log(text.text());
    });
  });
});
