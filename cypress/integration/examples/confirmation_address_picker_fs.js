/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

describe("Confirmation_Address_Picker_components_firestitch", () => {
  // Confirmation Address Picker
  it(" Confirmation Address Picker!", () => {
    cy.visit(Cypress.env("url"));
    //[data-cy='confirmation-address-picker']
    cy.get("[data-cy='confirmation-address-picker'] mat-card  button").should(
      "be.disabled"
    );
    cy.get(
      "[data-cy='confirmation-address-picker'] mat-form-field .mat-hint"
    ).then(function (text) {
      cy.log(text.text());
    });

    cy.get(
      "[data-cy='confirmation-address-picker'] fs-address-autocomplete input"
    ).type("Toronto, ON");
    cy.contains("Toronto, ON, Canada").click();

    //Dialog box
    cy.wait(3000);
    cy.get("mat-dialog-container .street").dblclick().type("215 Markham Road");
    cy.get("mat-dialog-container .address2").dblclick().type("2550 Lawrence");
    cy.get("mat-dialog-container .address3").dblclick().type("1470 Midland");
    cy.get("mat-dialog-container  .zip").dblclick().type("M1J 3C4");

    //Dialog box value checking
    cy.get(".mat-dialog-container .city input").should("have.value", "Toronto");
    cy.get(".mat-dialog-container .region input").should(
      "have.value",
      "Ontario"
    );
    cy.get(".mat-dialog-container .country input").should(
      "have.value",
      "Canada"
    );

    //Dialog box require fields
    cy.get(".mat-dialog-container .city input").should("have.prop", "required");
    cy.get(".mat-dialog-container .region input").should(
      "have.prop",
      "required"
    );
    cy.get(".mat-dialog-container .country input").should(
      "have.prop",
      "required"
    );

    // Google Map scrolling up and down
    cy.contains("Google").scrollIntoView();
    cy.get("[title='Zoom in']").click();
    cy.get(" [title='Zoom out']").click();
    cy.get("mat-dialog-container .street").scrollIntoView();

    // buttons
    cy.contains("Center Address");
    cy.contains("Cancel");
    cy.get("mat-dialog-container [type='submit']").dblclick();
  });
});
