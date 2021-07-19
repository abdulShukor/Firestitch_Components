//import addresspicker_PO from "../../support/pageObjects/fs-Adress-Picker/addresspicker_PO";
import AddressPicker from "../pageObjects/AddressPicker";
/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

describe("Address_Picker_components_firestitch", () => {
  // beforeEach(function () {
  //   cy.visit(Cypress.env("url"));
  // });
  it("Address Picker:Test case 1.", () => {
    cy.visit(Cypress.env("url"));
    const addPicker = new AddressPicker();
    // cy.visit("http://address.components.firestitch.com/");

    addPicker.locationInput().should("be.empty").and("have.prop", "required");
    addPicker.locationInput().type("Toronto, ON");
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
    const addPicker = new AddressPicker();

    addPicker.editableAddressLineOne().then(function (text) {
      const location_city = text.text();
      cy.log(location_city);

      if (location_city === "Toronto") {
        cy.log("Test Passed:");
      } else {
        cy.contains("Test Failed:location_city does not match");
      }
    });

    addPicker.editableAddressLineTwo().then(function (text) {
      const location_region_province = text.text();
      cy.log(location_region_province);
      if (location_region_province === "ONCA") {
        cy.log("Test Passed:");
      } else {
        cy.contains("Test Failed:location_region_province does not match:");
      }
    });

    addPicker.editableAddressTwoLineAddress().then(function (text) {
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

    addPicker.selectOneLineAddress().then(function (text) {
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
    const addPicker = new AddressPicker();
    addPicker.saveButton().dblclick();
    addPicker.saveButton().should("be.disabled");

    cy.contains("Saved").then(function (text) {
      cy.log(text.text());
    });

    addPicker.addPickerHint().then(function (text) {
      cy.log(text.text());
    });
  });

  it("Address Picker:Test case 4.", () => {
    const addPicker = new AddressPicker();
    addPicker.editableAddressTwoLineAddress().click();
    addPicker.containerStreet().dblclick().type("215 Markham Road");
    addPicker.containerAddress2().dblclick().type("2550 Lawrence");
    addPicker.containerAddress3().dblclick().type("1470 Midland");
    addPicker.containerZip().dblclick().type("M1J 3C4");
  });

  it("Address Picker:Test case 5.", () => {
    const addPicker = new AddressPicker();
    addPicker.containerCity().should("have.prop", "required");
    addPicker.containerRegion().should("have.prop", "required");
    addPicker.containerCountr().should("have.prop", "required");

    //validating the input values
    it("Address Picker:Test case 6.", () => {
      const addPicker = new AddressPicker();
      cy.log("checking input values");
      addPicker.containerCity().should("have.value", "Toronto");
      addPicker.containerRegion.should("have.value", "Ontario");
      addPicker.containerCountr.should("have.value", "Canada");
    });
  });

  it("Address Picker:Test case 7.", () => {
    const addPicker = new AddressPicker();
    cy.contains("Google").scrollIntoView();
    addPicker.containerZoomIn().click();
    addPicker.containerZoomOut().click();
    addPicker.containerStreet().scrollIntoView();
  });

  it("Address Picker:Test case 8.", () => {
    const addPicker = new AddressPicker();
    addPicker.containerCenterAddressButton().click();
    addPicker.containerCancelButton();
    addPicker.containerApplyButton().dblclick();

    // getting the address text
    it("Address Picker:Test 9.", () => {
      const addPicker = new AddressPicker();
      cy.wait(3000);
      addPicker.editableAddressTwoLineAddress().then(function (text) {
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
      addPicker.editableAddressTwoLineAddress().click();
      addPicker.containerCancelButton().click();
      cy.wait(3000);
    });
  });

  it("Address Picker:Test case 10.", () => {
    const addPicker = new AddressPicker();

    addPicker.editableAddressTwoLineAddress().click();
    addPicker.containerCity().clear();
    addPicker.containerRegion().clear();
    addPicker.containerCountr().clear();
    addPicker.containerRegion().type("Ontario");
    cy.contains("Ontario, Canada").click();
    addPicker.containerCountr().should("have.value", "Canada");
    addPicker.containerCancelButton().click();
  });
  it("Address Picker:Test case 11.", () => {
    // negative tests
    const addPicker = new AddressPicker();

    addPicker.editableAddressTwoLineAddress().click();
    addPicker.containerCity().clear();
    addPicker.containerCountr().clear();
    addPicker.containerApplyButton().dblclick();
    cy.contains(
      "Changes not saved. Please review errors highlighted in red"
    ).should("be.visible");
    addPicker.containerCancelButton().click();
  });
  it("Address Picker:Test case 12.", () => {
    //fs-modal-confirm pop up window massage "You Have Unsaved Changes"
    const addPicker = new AddressPicker();
    addPicker.editableAddressTwoLineAddress().click();
    addPicker.containerStreet().dblclick().clear();
    addPicker.containerStreet().dblclick().type("210 Markham Road");
    addPicker.containerOverlayBackdrop().click({ force: true });

    addPicker
      .containerTwoTitleText()
      .should("have.text", "You Have Unsaved Changes");
    addPicker
      .containerTwoContentText()
      .should("have.text", "What would you like to do with your changes?");

    addPicker
      .containerTwoSaveChangeButton()
      .should("have.text", "Save & Continue")
      .click();
  });

  it("Address Picker:Test case 13.", () => {
    //fs-modal-confirm button "Save & Continue"
    const addPicker = new AddressPicker();
    cy.wait(2000);
    addPicker.editableAddressTwoLineAddress().should("be.visible");
    addPicker.editableAddressTwoLineAddress().then(function (text) {
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
    const addPicker = new AddressPicker();
    addPicker.editableAddressTwoLineAddress().click();
    addPicker.containerStreet().dblclick().clear();
    addPicker.containerStreet().dblclick().type("220 Markham Road");
    addPicker.containerOverlayBackdrop().click({ force: true });
    addPicker
      .containerTwoDiscardChangesAndContinue()
      .should("have.text", "Discard Changes & Continue")
      .click();
    addPicker.container().should("be.visible");
  });

  //fs-modal-confirm button "Review Changes"
  it("Address Picker:Test case 15.", () => {
    const addPicker = new AddressPicker();
    addPicker.editableAddressTwoLineAddress().click({ force: true });
    addPicker.containerStreet().clear();
    addPicker.containerStreet().type("2100 Markham Road");
    addPicker.containerOverlayBackdrop().click({ force: true });
    cy.wait(2000);
    addPicker
      .containerTwoReviewChanges()
      .should("have.text", "Review Changes")
      .click();
    addPicker.container().should("be.visible");
  });
});
