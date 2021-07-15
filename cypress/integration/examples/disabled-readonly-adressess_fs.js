/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

describe("Disabled_Readonly_Address_Fs", () => {
  // Test case "Disabled and Readonly addresses"
  it.only("Disabled and Readonly addresses!", () => {
    cy.visit(Cypress.env("url"));
    cy.get(
      "[name='Disabled and Readonly addresses'] .line-1:nth-child(1)"
    ).then(function (text) {
      const first_line_address_text = text.text();
      cy.log(first_line_address);
      const first_line_address = "CNTower";
      if (first_line_address_text === first_line_address) {
        cy.log("Test Passed:");
      } else {
        cy.log("Test faild:");
        cy.contains("not match addres");
      }
    });

    //   cy.get(".mat-toolbar").eq("6").should("be.visible");
    cy.log("disabled");
  });
});
