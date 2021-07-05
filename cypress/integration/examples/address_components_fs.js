/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

describe("address_components_firestitch", () => {
  it("Address Picker!", () => {
    cy.visit("http://address.components.firestitch.com/");

    cy.get("#mat-input-0").type("Toronto");
    cy.contains("Toronto, ON, Canada").click();
    cy.contains("Save").dblclick();
    cy.contains("Save").should("be.disabled");
    cy.contains("Saved");

    //Dialog box
    cy.get(".mat-form-field-infix.ng-tns-c108-0").click();
    cy.contains("Apply").should("be.disabled");
    cy.get("#mat-input-27").dblclick().type("215 Markham Road");

    cy.get("#mat-input-21").dblclick().type("2550 Lawrence");
    cy.get("#mat-input-22").dblclick().type("1470 Midland");
    cy.get("#mat-input-26").dblclick().type("M1J 3C4");

    //Dialog box require fields
    // City require field
    cy.get("#mat-input-23").should("have.prop", "required");
    // Country require field
    cy.get("#mat-input-24").should("have.prop", "required");
    //Province require field
    cy.get("#mat-input-25").should("have.prop", "required");
    //cy.scrollTo('bottom')

    // assertion
    cy.get("#mat-input-23").should("have.value", "Toronto");
    cy.get("#mat-input-24").should("have.value", "Ontario");
    cy.get("#mat-input-25").should("have.value", "Canada");

    // Google Map scrolling up and down
    cy.contains("Google").scrollIntoView();
    cy.get("[title='Zoom in']").click();
    cy.get(" [title='Zoom out']").click();
    cy.get("#mat-input-27").scrollIntoView();

    // buttons
    cy.contains("Center Address");
    cy.contains("Cancel");
    cy.contains("Apply").click();
  });

  it(" Confirmation Address Picker!", () => {
    cy.visit("http://address.components.firestitch.com/");


    cy.contains("Save").should("be.disabled");
    cy.get("#mat-input-1").click().type("Toronto");
    cy.contains("Toronto, ON, Canada").click();

    //Dialog box

    cy.get("#mat-input-27").dblclick().type("215 Markham Road");

    cy.get("#mat-input-21").dblclick().type("2550 Lawrence");
    cy.get("#mat-input-22").dblclick().type("1470 Midland");

    //Dialog box require fields
    // City require field
    cy.get("#mat-input-23").should("have.prop", "required");
    // Country require field
    cy.get("#mat-input-24").should("have.prop", "required");
    //Province require field
    cy.get("#mat-input-25").should("have.prop", "required");
    //cy.scrollTo('bottom')

    // assertion
    cy.get("#mat-input-23").should("have.value", "Toronto");
    cy.get("#mat-input-24").should("have.value", "Ontario");
    cy.get("#mat-input-25").should("have.value", "Canada");
    cy.get("#mat-input-26").dblclick().type("M1J 3C4");

    // Google Map scrolling up and down
    cy.contains("Google").scrollIntoView();
    cy.get("[title='Zoom in']").click();
    cy.get(" [title='Zoom out']").click();
    cy.get("#mat-input-27").scrollIntoView();

    // buttons
    cy.contains("Center Address");
    cy.contains("Cancel");
    cy.contains("Apply").click();
  });

  it("Address Form!", () => {
    cy.visit("http://address.components.firestitch.com/");
    cy.get("#mat-input-9").type("Toronto");
    cy.get("#mat-input-16").type("2550 Lawrence");
    cy.get("#mat-input-10").type("1470 Midland");
    cy.get("#mat-input-11").type("1470 Midland");
    cy.get("#mat-input-12").type("Scarborough");
    cy.get("#mat-input-13").type("Ontario");
    cy.contains("Ontario").click();
    cy.get("#mat-input-14").should("have.value", "Canada");
    cy.get("#mat-input-15").type("M1J 3C4");
  });

  it("Two-line format, pre-filled  !", () => {
    cy.get(".ng-tns-c108-2.editable").dblclick();
    cy.get("#mat-input-21").should("have.value", "CN Tower");
    cy.get("#mat-input-26").should("have.value", "301 Front Street West");
    cy.get("#mat-input-22").should("have.value", "Toronto");
    cy.get("#mat-input-23").should("have.value", "Ontario");
    cy.get("#mat-input-24").should("have.value", "Canada");
    cy.get("#mat-input-25").should("have.value", "M5V 2T6");

    cy.contains("Apply").should("be.disabled");
    cy.contains("Cancel").click({ force: true });

    cy.get(".ng-tns-c108-2.editable").then(function (text) {
      cy.log(text.text());
    });
  });

  it("Address Region, no validation, horizontal!", () => {
    cy.get("#mat-input-17").click().type("Canada");
    cy.contains("Canada").click();
    cy.get("#mat-input-5").click().type("Ontario");
    cy.contains("Ontario").click();
  });

  it("Address Region, pre-filled, horizontal stretched!", () => {
    cy.get("#mat-input-18").should("have.value", "Canada");
    cy.get("#mat-input-6").should("have.value", "");
  });

  it("Address Region, required!", () => {
    cy.get("#mat-input-19").type("Toronto");
    cy.get("#mat-input-7").type("Ontario");
  });

  it("Address Region, disabled!", () => {
    cy.get("#mat-input-20").should("be.disabled");
  });
});
