//import addresspicker_PO from "../../support/pageObjects/fs-Adress-Picker/addresspicker_PO";
import addressPicker from "../pageObjects/addressPicker";
/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

describe("Address_Picker_components_firestitch", () => {
  // beforeEach(function () {
  //   cy.visit(Cypress.env("url"));
  // });
  it("Address Picker:Test case 1.", () => {
    cy.visit(Cypress.env("url"));
    const addPicker = new addressPicker();
    // cy.visit("http://address.components.firestitch.com/");
    //Location

    addPicker.LocationInput().should("be.empty").and("have.prop", "required");

    addPicker.LocationInput().type("Toronto, ON");
    cy.contains("Toronto, ON, Canada").click();

    //iterating over the autocomplete list
    // cy.get(".mat-autocomplete-panel").each(($el, index, $list) => {
    //   const location = $el.text();
    //   const LocationToSelect = "TorontoONCA";
    //   if (location === LocationToSelect) {
    //     cy.location.dblclick();
    //   }
    // });
  });

  it("Address Picker:Test case 2.", () => {
    const addPicker = new addressPicker();

    addPicker.EditableAddressLineOne().then(function (text) {
      const location_city = text.text();
      cy.log(location_city);

      if (location_city === "Toronto") {
        cy.log("Test Passed:");
      } else {
        cy.contains("Test Failed:location_city does not match");
      }
    });

    //Line-2
    addPicker.EditableAddressLineTwo().then(function (text) {
      const location_region_province = text.text();
      cy.log(location_region_province);
      if (location_region_province === "ONCA") {
        cy.log("Test Passed:");
      } else {
        cy.contains("Test Failed:location_region_province does not match:");
      }
    });

    addPicker.EditableAddressTwoLineAddress().then(function (text) {
      const location_city_region_province_two_line_formate = text.text();
      cy.log(location_city_region_province_two_line_formate);
      if (location_city_region_province_two_line_formate === "TorontoONCA") {
        cy.log("Test Passed:");
      } else {
        cy.contains(
          "Test Failed:location_city_region_province_two_line_formate does not match:"
        );
      }
    });

    //Oneline Address
    addPicker.SelectOneLineAddress().then(function (text) {
      const one_Line_address = text.text();
      cy.log(one_Line_address);
      if (one_Line_address === "TorontoONCA") {
        cy.log("Test Passed:");
      } else {
        cy.contains("Test Failed:one_Line_address does not match:");
      }
    });
  });
  it("Address Picker:Test case 3.", () => {
    const addPicker = new addressPicker();
    // "Save button" clicking and asserting to be disable after clicking
    addPicker.SaveButton().dblclick();
    addPicker.SaveButton().should("be.disabled");

    cy.contains("Saved").then(function (text) {
      cy.log(text.text());
    });

    //hint text
    addPicker.AddPickerHint().then(function (text) {
      cy.log(text.text());
    });
  });

  it("Address Picker:Test case 4.", () => {
    //dialog box input values
    const addPicker = new addressPicker();
    addPicker.EditableAddressTwoLineAddress().click();
    addPicker.ContainerStreet().dblclick().type("215 Markham Road");
    addPicker.ContainerAddress2().dblclick().type("2550 Lawrence");
    addPicker.ContainerAddress3().dblclick().type("1470 Midland");
    addPicker.ContainerZip().dblclick().type("M1J 3C4");
  });

  //Asserting the require fields
  it("Address Picker:Test case 5.", () => {
    const addPicker = new addressPicker();
    addPicker.ContainerCity().should("have.prop", "required");
    addPicker.ContainerRegion().should("have.prop", "required");
    addPicker.ContainerCountr().should("have.prop", "required");

    //validating the input values
    it("Address Picker:Test case 6.", () => {
      const addPicker = new addressPicker();
      cy.log("checking input values");
      addPicker.ContainerCity().should("have.value", "Toronto");
      addPicker.ContainerRegion.should("have.value", "Ontario");
      addPicker.ContainerCountr.should("have.value", "Canada");
    });
  });

  it("Address Picker:Test case 7.", () => {
    const addPicker = new addressPicker();
    // Google Map scrolling up and down
    cy.contains("Google").scrollIntoView();
    addPicker.ContainerZoomIn().click();
    addPicker.ContainerZoomOut().click();
    addPicker.ContainerStreet().scrollIntoView();
  });

  it("Address Picker:Test case 8.", () => {
    // dialog box buttons
    const addPicker = new addressPicker();
    addPicker.ContainerCenterAddressButton().click();
    addPicker.ContainerCancelButton();
    addPicker.ContainerApplyButton().dblclick();

    // getting the address text
    it("Address Picker:Test 9.", () => {
      const addPicker = new addressPicker();
      cy.wait(3000);
      addPicker.EditableAddressTwoLineAddress().then(function (text) {
        const address = text.text();
        const addressMatch =
          "215 Markham Road2550 Lawrence1470 MidlandTorontoONM1J 3C4CA";
        cy.log(address);

        if (address === addressMatch) {
          cy.log("Test Passed:");
        } else {
          cy.contains("address does not match:");
        }
      });
      //dialog box Cancel button
      addPicker.EditableAddressTwoLineAddress().click();
      addPicker.ContainerCancelButton().click();
      cy.wait(3000);
    });
  });

  it("Address Picker:Test case 10.", () => {
    const addPicker = new addressPicker();

    addPicker.EditableAddressTwoLineAddress().click();
    addPicker.ContainerCity().clear();
    addPicker.ContainerRegion().clear();
    addPicker.ContainerCountr().clear();
    addPicker.ContainerRegion().type("Ontario");
    cy.contains("Ontario, Canada").click();
    addPicker.ContainerCountr().should("have.value", "Canada");
    addPicker.ContainerCancelButton().click();
  });
  it("Address Picker:Test case 11.", () => {
    // negative tests
    const addPicker = new addressPicker();

    addPicker.EditableAddressTwoLineAddress().click();
    addPicker.ContainerCity().clear();
    addPicker.ContainerCountr().clear();
    addPicker.ContainerApplyButton().dblclick();
    cy.contains(
      "Changes not saved. Please review errors highlighted in red"
    ).should("be.visible");
    addPicker.ContainerCancelButton().click();
  });
  it("Address Picker:Test case 12.", () => {
    //fs-modal-confirm pop up window massage "You Have Unsaved Changes"
    const addPicker = new addressPicker();
    addPicker.EditableAddressTwoLineAddress().click();
    addPicker.ContainerStreet().dblclick().clear();
    addPicker.ContainerStreet().dblclick().type("210 Markham Road");
    addPicker.ContainerOverlayBackdrop().click({ force: true });

    addPicker
      .ContainerTwoTitleText()
      .should("have.text", "You Have Unsaved Changes");
    addPicker
      .ContainerTwoContentText()
      .should("have.text", "What would you like to do with your changes?");

    addPicker
      .ContainerTwoSaveChangeButton()
      .should("have.text", "Save & Continue")
      .click();
  });

  it("Address Picker:Test case 13.", () => {
    //fs-modal-confirm button "Save & Continue"
    const addPicker = new addressPicker();
    cy.wait(2000);
    addPicker.EditableAddressTwoLineAddress().should("be.visible");
    addPicker.EditableAddressTwoLineAddress().then(function (text) {
      const address_edited = text.text();
      cy.log(address_edited);
      const address_match_with =
        "210 Markham Road2550 Lawrence1470 MidlandTorontoONM1J 3C4CA";
      if (address_edited === address_match_with) {
        cy.log("Test Passed:");
      } else {
        cy.log("Test Failed:", "does not match the address)");
        cy.contains("does not match the address");
      }
    });
  });

  //fs-modal-confirm button "Discard Changes & Continue "
  it("Address Picker:Test case 14.", () => {
    const addPicker = new addressPicker();
    addPicker.EditableAddressTwoLineAddress().click();
    addPicker.ContainerStreet().dblclick().clear();
    addPicker.ContainerStreet().dblclick().type("220 Markham Road");
    addPicker.ContainerOverlayBackdrop().click({ force: true });
    addPicker
      .ContainerTwoDiscardChangesAndContinue()
      .should("have.text", "Discard Changes & Continue")
      .click();
    addPicker.Container().should("be.visible");
  });

  //fs-modal-confirm button "Review Changes"
  it("Address Picker:Test case 15.", () => {
    const addPicker = new addressPicker();
    addPicker.EditableAddressTwoLineAddress().click({ force: true });
    addPicker.ContainerStreet().clear();
    addPicker.ContainerStreet().type("2100 Markham Road");
    addPicker.ContainerOverlayBackdrop().click({ force: true });
    cy.wait(2000);
    addPicker
      .ContainerTwoSaveChangeButton()
      .should("have.text", "Review Changes")
      .click();
    addPicker.Container().should("be.visible");
  });
});
