/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />


describe("address_components_firestitch", () => {
  it("Address Picker!", () => {
    cy.visit("http://address.components.firestitch.com/");

    //cy.get('.ng-tns-c108-0.ng-star-inserted').eq("0").should('have.attr', 'placeholder', 'Location')
   
    cy.get("#mat-input-0").type("Toronto");
    cy.contains("Toronto, ON, Canada").click();
    cy.contains("Save").dblclick();
    cy.contains("Save").should("be.disabled");
    cy.contains("Saved");
    cy.get(".mat-form-field-infix.ng-tns-c108-0").click();

    cy.get("#mat-input-23").should('have.prop','required');
    cy.get("#mat-input-24").should('have.prop','required')
    cy.get("#mat-input-25").should('have.prop','required')

    cy.contains("Apply").should("be.disabled");
    cy.contains("Center Address")
    cy.contains("Cancel")



   // cy.get('#rent').type('630.00').should('have.value', '630.00')

   // cy.get("#mat-input-27").dblclick().type("215 Markham Road");
   // cy.get("#mat-input-27").should('have.prop','required')

   cy.get("#mat-input-23").should('have.value','Toronto')

   cy.get("#mat-input-23").then(function (text) {
    cy.log(text.text());
  });

  


    //cy.get("#mat-input-21").dblclick().type("2550 Lawrence");
    // cy.get("#mat-input-22").dblclick().type("1470 Midland");

   //cy.get("#mat-input-23").dblclick().clear();
   //cy.get("#mat-input-23").dblclick().type("23");

   //  cy.get("#mat-input-23").should('have.prop','required')
    //cy.get('#mat-input-23:invalid').should('have.length', 4)
    //cy.get("#mat-input-23").dblclick().clear();
    //cy.get("#mat-input-23").dblclick().type("Toronto");
    //cy.get("#mat-input-24").dblclick().type("Canada");
   // cy.get("#mat-input-25").dblclick().type("Ontario");
   // cy.get("#mat-input-26").dblclick().type("M1J 3C4");
    //cy.get('#mat-dialog-0').dblclick().type("Markham")

  
    


    
   // cy.contains("Apply").should("be.enabled");
   // cy.contains("Apply").click();

    //cy.get('.product').should('have.text', 'Tutorialspoint');

  });
});
