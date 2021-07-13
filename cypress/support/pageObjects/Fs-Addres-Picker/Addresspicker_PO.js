class addresspicker_PO {
  visitAddressPicker() {
    cy.visit(Cypress.env("URL"));
  }
}
export default addresspicker_PO;
