/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

describe("format_examples_fs", () => {
  //  //Test case "Address Form"
  it("Format Examples!", () => {
    cy.visit(Cypress.env("url"));

    cy.get("[name='Format Examples'] .oneline").then(function (text) {
      const format_address_text = text.text();
      cy.log(format_address_text);
      const format_address = "CN Tower301 Front St WTorontoONM5V 2T6";
      if (format_address_text === format_address) {
        cy.log("Test Passed:");
      } else {
        cy.log("Test faild:");
        cy.contains("Address does not matched");
      }
    });

    cy.get("[name='Format Examples'] [format='twoline'] .line-1").then(
      function (text) {
        const format_address_oneline_text = text.text();
        cy.log(format_address_oneline_text);
        const format_address_oneline = "CN Tower";
        if (format_address_oneline_text === format_address_oneline) {
          cy.log("Test Passed:");
        } else {
          cy.log("Test faild:");
          cy.contains("Address does not matched");
        }
      }
    );

    cy.get("[name='Format Examples'] [format='twoline'] .line-2").then(
      function (text) {
        const format_address_second_line_text = text.text();
        cy.log(format_address_second_line_text);
        const format_address_second_line = "301 Front St WTorontoONM5V 2T6";
        if (format_address_second_line_text === format_address_second_line) {
          cy.log("Test Passed:");
        } else {
          cy.log("Test faild:");
          cy.contains("Address does not matched");
        }
      }
    );

    cy.get("[name='Format Examples'] [format='twoline']").then(function (text) {
      const format_address_twoline_text = text.text();
      cy.log(format_address_twoline_text);
      const format_addresstwoline = "CN Tower301 Front St WTorontoONM5V 2T6";
      if (format_address_twoline_text === format_addresstwoline) {
        cy.log("Test Passed:");
      } else {
        cy.log("Test faild:");
        cy.contains("Address does not matched");
      }
    });
  });
});
