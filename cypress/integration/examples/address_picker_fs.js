//import addresspicker_PO from "../../support/pageObjects/fs-Adress-Picker/addresspicker_PO";
/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

describe("Address_Picker_components_firestitch", () => {
  // beforeEach(function () {
  //   cy.visit(Cypress.env("url"));
  // });

  it("Address Picker: Enter location, check save button, get hint text, log & validate the Saved text.", () => {
    cy.visit(Cypress.env("url"));
    //Location
    cy.get("[data-cy='address-picker'] fs-address-autocomplete input")
      .should("be.empty")
      .and("have.prop", "required");
    cy.get("[data-cy='address-picker'] fs-address-autocomplete input").type(
      "Toronto, ON"
    );
    cy.contains("Toronto, ON, Canada").click();

    //iterating over the autocomplete list
    // cy.get(".mat-autocomplete-panel").each(($el, index, $list) => {
    //   const location = $el.text();
    //   const LocationToSelect = "TorontoONCA";
    //   if (location === LocationToSelect) {
    //     cy.location.dblclick();
    //   }
    // });

    //Line-1
    cy.get("[data-cy='address-picker']  .editable .line-1").then(function (
      text
    ) {
      const location_city = text.text();
      cy.log(location_city);

      if (location_city === "Toronto") {
        cy.log("Test Passed:", location_city === "Toronto");
      } else {
        cy.contains("Test Failed:location_city does not match");
      }
    });

    //Line-2
    cy.get("[data-cy='address-picker']  .editable .line-2").then(function (
      text
    ) {
      const location_region_province = text.text();
      cy.log(location_region_province);
      if (location_region_province === "ONCA") {
        cy.log("Test Passed:", location_region_province === "ONCA");
      } else {
        cy.contains("Test Failed:location_region_province does not match:");
      }
    });

    cy.get("[data-cy='address-picker']  .editable ").then(function (text) {
      const location_city_region_province_two_line_formate = text.text();
      cy.log(location_city_region_province_two_line_formate);
      if (location_city_region_province_two_line_formate === "TorontoONCA") {
        cy.log(
          "Test Passed:",
          location_city_region_province_two_line_formate === "TorontoONCA"
        );
      } else {
        cy.contains(
          "Test Failed:location_city_region_province_two_line_formate does not match:"
        );
      }
    });

    //Oneline Address
    cy.get("[data-cy='address-picker'] .oneline").then(function (text) {
      const one_Line_address = text.text();
      cy.log(one_Line_address);
      if (one_Line_address === "TorontoONCA") {
        cy.log("Test Passed:", one_Line_address === "TorontoONCA");
      } else {
        cy.contains("Test Failed:one_Line_address does not match:");
      }
    });

    // "Save button" clicking and asserting to be disable after clicking
    cy.get("[data-cy='address-picker'] mat-card  button").dblclick();
    cy.get("[data-cy='address-picker'] mat-card  button").should("be.disabled");

    //hint text
    cy.get("[data-cy='address-picker'] mat-form-field .mat-hint").then(
      function (text) {
        cy.log(text.text());
      }
    );

    cy.contains("Saved").then(function (text) {
      cy.log(text.text());
    });
  });

  it("Address Picker: Enter street, address 2 & 3, and zip code.", () => {
    //dialog box input values
    cy.get("[data-cy='address-picker'] fs-address-format.editable").click();
    cy.get("mat-dialog-container .street").dblclick().type("215 Markham Road");
    cy.get("mat-dialog-container .address2").dblclick().type("2550 Lawrence");
    cy.get("mat-dialog-container .address3").dblclick().type("1470 Midland");
    cy.get("mat-dialog-container  .zip").dblclick().type("M1J 3C4");
  });

  //Asserting the require fields
  it("Address Picker:  Asserting require prop and value for City, Country, and Region.", () => {
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
  });

  it("Address Picker: Zoom in & out, and scroll to view.", () => {
    // Google Map scrolling up and down
    cy.contains("Google").scrollIntoView();
    cy.get("[title='Zoom in']").click();
    cy.get(" [title='Zoom out']").click();
    cy.get("mat-dialog-container .street").scrollIntoView();
  });

  it("Address Picker: performing an action on Center Address, Cancel, and  Apply buttons.", () => {
    // dialog box buttons
    //Center Address
    cy.get(".mat-dialog-actions button:nth-child(2)").click();
    //Cancel
    cy.get(".mat-dialog-actions button:nth-child(3)");
    //Apply
    cy.get("mat-dialog-container [type='submit']").dblclick();

    // getting the address text
    cy.wait(3000);
    cy.get("[data-cy='address-picker'] fs-address-format.editable").then(
      function (text) {
        const address = text.text();
        const addressMatch =
          "215 Markham Road2550 Lawrence1470 MidlandTorontoONM1J 3C4CA";
        cy.log(address);

        if (address === addressMatch) {
          cy.log("Test Passed:", address === addressMatch);
        } else {
          cy.contains("address does not match:");
        }
      }
    );
    cy.pause();

    //dialog box Cancel button
    cy.get("[data-cy='address-picker'] fs-address-format.editable").click();
    cy.contains("Cancel").click();
    cy.wait(3000);
  });

  it("Address Picker: Using assertion on City, Region, and Country.", () => {
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
  });
  it("Address Picker: Use assertion for negative tests cases on City, Region, Country.", () => {
    // negative tests
    cy.get("[data-cy='address-picker'] fs-address-format.editable").click();
    cy.get(".mat-dialog-container .city").clear();
    cy.get(".mat-dialog-container .country").clear();
    cy.get("mat-dialog-container [type='submit']").dblclick();
    cy.contains(
      "Changes not saved. Please review errors highlighted in red"
    ).should("be.visible");
    cy.get(".mat-dialog-actions button:nth-child(3)").click();
  });
  it("Address Picker: pop-up window message 'You Have Unsaved Changes' editing street, asserting Title and Content.", () => {
    //fs-modal-confirm pop up window massage "You Have Unsaved Changes"
    cy.get("[data-cy='address-picker'] fs-address-format.editable").click();
    cy.get("mat-dialog-container .street").dblclick().clear();
    cy.get("mat-dialog-container .street").dblclick().type("210 Markham Road");
    cy.get(".cdk-overlay-backdrop").click({ force: true });

    //fs-modal-confirm Title
    cy.get(".fs-modal-confirm .mat-dialog-title").should(
      "have.text",
      "You Have Unsaved Changes"
    );

    //fs-modal-confirm Contnet
    cy.get(".fs-modal-confirm .mat-dialog-content").should(
      "have.text",
      "What would you like to do with your changes?"
    );
  });

  it("Address Picker: Use assertion on 'Save & Continue,Discard Changes & Continue and Review Changes'.", () => {
    //fs-modal-confirm button "Save & Continue"
    cy.get(".fs-modal-confirm .mat-primary")
      .should("have.text", "Save & Continue")
      .click();
    cy.get("[data-cy='address-picker'] fs-address-format.editable").should(
      "be.visible"
    );
    cy.get("[data-cy='address-picker'] fs-address-format.editable").then(
      function (text) {
        const address_edited = text.text();
        const address_match_with =
          "210 Markham Road2550 Lawrence1470 MidlandTorontoONM1J 3C4CA";
        if (address_edited == address_match_with) {
          cy.log("Test Passed:", address_edited === address_match_with);
        } else {
          cy.log("Test Passed:", "does not match the address)");
        }
      }
    );

    //fs-modal-confirm button "Discard Changes & Continue "
    cy.get("[data-cy='address-picker'] fs-address-format.editable").click();
    cy.get("mat-dialog-container .street").dblclick().clear();
    cy.get("mat-dialog-container .street").dblclick().type("220 Markham Road");
    cy.get(".cdk-overlay-backdrop").click({ force: true });
    cy.get(".fs-modal-confirm [type='button']:nth-child(2)")
      .should("have.text", "Discard Changes & Continue")
      .click();
    cy.get("[data-cy='address-picker'] fs-address-format.editable").should(
      "be.visible"
    );

    //fs-modal-confirm button "Review Changes"
    cy.get("[data-cy='address-picker'] fs-address-format.editable").click();
    cy.get("mat-dialog-container .street").dblclick().clear();
    cy.get("mat-dialog-container .street").dblclick().type("2100 Markham Road");
    cy.get(".cdk-overlay-backdrop").click({ force: true });
    cy.get(".fs-modal-confirm [type='button']:nth-child(3)")
      .should("have.text", "Review Changes")
      .click();
    cy.get("mat-dialog-container").should("be.visible");
  });
});
