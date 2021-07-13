//import addresspicker_PO from "../../support/pageObjects/fs-Adress-Picker/addresspicker_PO";
/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

describe("address_components_firestitch", () => {
  it("Address Picker!", () => {
    cy.visit(Cypress.env("url"));

    //Location
    cy.get("[data-cy='address-picker'] fs-address-autocomplete input").type(
      "Toronto, ON"
    );
    cy.contains("Toronto, ON, Canada").click();

    // iterating over the autocomplete list
    // cy.get(".mat-autocomplete-panel> *").each(($el, index, $list) => {
    //   const location = $el.text();
    //   const LocationToSelect = "Toronto, ON, CA";
    //   if (location === LocationToSelect) {
    //     cy.$el.dblclick();
    //   }
    // });

    // save button
    cy.get("[data-cy='address-picker'] mat-card  button").dblclick();
    cy.get("[data-cy='address-picker'] mat-card  button").should("be.disabled");
    //get hint text
    cy.get("[data-cy='address-picker'] mat-form-field .mat-hint").then(
      function (text) {
        cy.log(text.text());
      }
    );
    cy.contains("Saved");

    //dialog box input values
    cy.get("[data-cy='address-picker'] fs-address-format.editable").click();
    cy.get("mat-dialog-container .street").dblclick().type("215 Markham Road");
    cy.get("mat-dialog-container .address2").dblclick().type("2550 Lawrence");
    cy.get("mat-dialog-container .address3").dblclick().type("1470 Midland");
    cy.get("mat-dialog-container  .zip").dblclick().type("M1J 3C4");

    //Asserting the require fields
    cy.get("mat-dialog-container  .city input").should("have.prop", "required");

    cy.get("mat-dialog-container [name='region'] input").should(
      "have.prop",
      "required"
    );
    cy.get("mat-dialog-container  .country input").should(
      "have.prop",
      "required"
    );

    //Asserting the input values
    cy.log("checking input values");
    cy.get("mat-dialog-container  .city input").should("have.value", "Toronto");

    cy.get("mat-dialog-container [name='region'] input").should(
      "have.value",
      "Ontario"
    );
    cy.get("mat-dialog-container  .country input").should(
      "have.value",
      "Canada"
    );

    // Google Map scrolling up and down
    cy.contains("Google").scrollIntoView();
    cy.get("[title='Zoom in']").click();
    cy.get(" [title='Zoom out']").click();
    cy.get("mat-dialog-container .street").scrollIntoView();

    // buttons
    cy.contains("Center Address").click();
    cy.contains("Cancel");
    cy.get("mat-dialog-container [type='submit']").dblclick();

    // getting text
    cy.wait(3000);
    cy.get("[data-cy='address-picker'] fs-address-format.editable").then(
      function (text) {
        cy.log(text.text());
      }
    );

    //cancel button
    cy.get("[data-cy='address-picker'] fs-address-format.editable").click();
    cy.contains("Cancel").click();
    cy.wait(3000);

    cy.get("[data-cy='address-picker'] fs-address-format.editable").click();
    cy.get("mat-dialog-container  .city input").clear();
    cy.get("mat-dialog-container [name='region'] input").clear();
    cy.get("mat-dialog-container  .country input").clear();
    cy.get("mat-dialog-container [name='region'] input").type("Ontario");
    cy.contains("Ontario, Canada").click();
    cy.get("mat-dialog-container  .country input").should(
      "have.value",
      "Canada"
    );
    cy.contains("Cancel").click();

    // negative tests
    cy.get("[data-cy='address-picker'] fs-address-format.editable").click();
    cy.get(".mat-dialog-container .city").clear();
    cy.get(".mat-dialog-container .country").clear();
    cy.get("mat-dialog-container [type='submit']").dblclick();

    cy.contains(
      "Changes not saved. Please review errors highlighted in red"
    ).should("be.visible");
  });

  // Confirmation Address Picker
  it.only(" Confirmation Address Picker!", () => {
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

  //  //Test case "Address Form"
  it("Address Form!", () => {
    cy.visit(Cypress.env("url"));
    cy.get(".name").type("Toronto").click();
    cy.get(".street").type("215 Markham Road");
    cy.contains("215 Markham Road").click();
    cy.get(".address2").type("1470 Midland");
    cy.get(".address3").type("1470 Midland");
    cy.get(".city").should("be.not.empty");
    cy.get("[data-cy='address-form='] .region").should("be.not.empty");
    // cy.contains("Ontario").click();
    cy.get("[data-cy='address-form='] .country").should("be.not.empty");
    cy.get(".zip").should("be.not.empty");
  });

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

  // Test case "Disabled and Readonly addresses"
  // it.only("Disabled and Readonly addresses!", () => {
  //   cy.visit(Cypress.env("url"));
  //   cy.get("[data-cy='address-region-no-validation']").should("be.exist");
  //   cy.get(".mat-toolbar").eq("6").should("be.visible");
  // });

  // Test case "Address Region, no validation, horizontal"
  it("Address Region, no validation, horizontal!", () => {
    cy.visit(Cypress.env("url"));
    cy.get("[data-cy='address-region-no-validation'] .country input").type(
      "Canada"
    );
    cy.contains("Canada").click();

    cy.get("[data-cy='address-region-no-validation'] .region input").type(
      "Ontario"
    );
    cy.contains("Ontario").click();
    cy.get("[data-cy='address-region-no-validation'] .country input").clear();
    cy.get("[data-cy='address-region-no-validation'] .region input").clear();
    cy.get("[data-cy='address-region-no-validation'] .region input").type(
      "Ontario"
    );
    cy.contains("Ontario").click();
    cy.get("[data-cy='address-region-no-validation'] .country input").should(
      "have.value",
      "Canada"
    );
  });

  // Test case "Address Region, pre-filled, horizontal stretched"
  it("Address Region, pre-filled, horizontal stretched!", () => {
    cy.visit(Cypress.env("url"));
    cy.get("[data-cy='address-region-prefilled'] .country input").should(
      "have.value",
      "Canada"
    );
    cy.get("[data-cy='address-region-prefilled'] .region").type("Ontario");
    cy.contains("Ontario").click();
    cy.get("[data-cy='address-region-prefilled'] .country input").clear();
    cy.get("[data-cy='address-region-prefilled'] .region").clear();
    cy.get("[data-cy='address-region-prefilled'] .region").type("Alberta");
    cy.contains("Alberta").click();
    cy.get("[data-cy='address-region-prefilled'] .country input").should(
      "have.value",
      "Canada"
    );
  });

  // Test case "Address Region, required"
  it("Address Region, required!", () => {
    cy.visit(Cypress.env("url"));
    cy.get("[data-cy='address-region-required']");
    cy.get("[data-cy='address-region-required'] .country").type("Canada");
    cy.get("[data-cy='address-region-required'] .region").type("Ontario");
    cy.contains("Ontario").click();
    cy.get("[data-cy='address-region-required'] .region").clear();
    cy.get("[data-cy='address-region-required'] .region").clear();
    cy.get("[data-cy='address-region-required'] .region").type("Ontario");
    cy.contains("Ontario").click();
    cy.get("[data-cy='address-region-required'] .country input").should(
      "have.value",
      "Canada"
    );
  });

  // Test case "Address Region, disabled"
  it("Address Region, disabled!", () => {
    cy.visit(Cypress.env("url"));
    cy.get(
      "[data-cy='address-region-disabled'] .country  input:disabled"
    ).should("be.disabled");

    cy.get(
      "[data-cy='address-region-disabled'] .region  input:disabled"
    ).should("be.disabled");
  });
});
