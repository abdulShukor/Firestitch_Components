/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

describe("input.components.firestitch", () => {
  it("Single Line Input!", () => {
    cy.visit(Cypress.env("url"));

    // Single Line Input
    // cy.get("#mat-input-0").should('have.value', '')

    cy.get("#mat-input-0").type(
      "fgdddfgtrergfgsdglkhcvzjxkvljzxcklvjzxklcvjzxklcvjz"
    );

    //Single Line Input with Hint
    cy.get("#mat-input-1").type(
      "4535fgdddfgtrergfgsdglkhcvzjxkvljzxcklvjzxklcvjzxklcvjz"
    );
    cy.get("#mat-hint-0").then(function (text) {
      cy.log(text.text());
    });

    //Single Line Input with Icon
    cy.get("#mat-input-2").type(
      "4535fgdddfgtrergfgsdglkhcvzjxkvljzxcklvjzxklcvjzxklcvjz"
    );

    //Single Line Input with Prefix and Suffix
    cy.get("#mat-input-3").type(
      "4535fgdddfgtrergfgsdglkhcvzjxkvljzxcklvjzxklcvjzxklcvjz"
    );
    cy.get(".mat-form-field-prefix > span").then(function (text) {
      let numProfix = cy.log(text.text());
      // expect(Number(numProfix)).to.equal(+1);
    });

    //Disabled Single Line Input
    cy.get("#mat-input-4").should("be.disabled");

    //Single Line Input with Debounce
    cy.get("#mat-input-5").type(
      "4535fgdddfgtrergfgsdglkhcvzjxkvljzxcklvjzxklcvjzxklcvjz"
    );
    cy.get("#mat-hint-1").then(function (text) {
      cy.log(text.text());
    });

    //Single Line with Max Length
    cy.get("#mat-input-6").type(
      "4535fgdddfgtrergfgsdglkhcvzjxkvljzxcklvjzxklcvjzxklcvjz"
    );
    cy.get("#mat-hint-2").then(function (text) {
      cy.log(text.text());
    });
    cy.get("#mat-input-6").should("have.length", 20 / 20);

    //Single Line with Change on Blur
    cy.get("#mat-input-7").type(
      "4535fgdddfgtrergfgsdglkhcvzjxkvljzxcklvjzxklcvjzxklcvjz"
    );

    //Multi-Line Input
    cy.get("#mat-input-8").type(
      "4535fgdddfgtrergfgsdglkhcvzjxkvljzxcklvjzxklcvjzxklcvjz4535fgdddfgtrergfgsdglkhcvzjxkvljzxcklvjzxklcvjzxklcvjz"
    );
  });

  it("Single Line Input with Hint!", () => {
    // Single Line Input
    cy.get(":nth-child(2) > .fs-iframe-scrollto");
    cy.get("#mat-input-0").invoke("val").should("not.be.empty");

    //Single Line Input with Hint
    cy.get("#mat-input-1").invoke("val").should("not.be.empty");

    //Single Line Input with Icon
    cy.get("#mat-input-2").invoke("val").should("not.be.empty");

    //Single Line Input with Prefix and Suffix
    cy.get("#mat-input-3").invoke("val").should("not.be.empty");

    //Disabled Single Line Input
    cy.get("#mat-input-4").should("be.disabled");

    //Single Line Input with Debounce
    cy.get("#mat-input-5").invoke("val").should("not.be.empty");

    //Single Line with Max Length
    cy.get("#mat-input-6").invoke("val").should("not.be.empty");

    //Single Line with Change on Blur
    cy.get("#mat-input-7").invoke("val").should("not.be.empty");

    //Multi-Line Input
    cy.get("#mat-input-8").invoke("val").should("not.be.empty");
  });

  it("Single Line Input with Icon!", () => {
    cy.get(":nth-child(3) > .fs-iframe-scrollto");
    cy.get("#mat-input-0").invoke("val").should("not.be.empty");

    //Single Line Input with Hint
    cy.get("#mat-input-1").invoke("val").should("not.be.empty");

    //Single Line Input with Icon
    cy.get("#mat-input-2").invoke("val").should("not.be.empty");

    //Single Line Input with Prefix and Suffix
    cy.get("#mat-input-3").invoke("val").should("not.be.empty");

    //Disabled Single Line Input
    cy.get("#mat-input-4").should("be.disabled");

    //Single Line Input with Debounce
    cy.get("#mat-input-5").invoke("val").should("not.be.empty");

    //Single Line with Max Length
    cy.get("#mat-input-6").invoke("val").should("not.be.empty");

    //Single Line with Change on Blur
    cy.get("#mat-input-7").invoke("val").should("not.be.empty");

    //Multi-Line Input
    cy.get("#mat-input-8").invoke("val").should("not.be.empty");
  });

  it("Single Line Input with Prefix and Suffix!", () => {
    // Single Line Input
    cy.get(":nth-child(2) > .fs-iframe-scrollto");
    cy.get(":nth-child(4) > .fs-iframe-scrollto");
    //Single Line Input with Hint
    cy.get("#mat-input-1").invoke("val").should("not.be.empty");

    //Single Line Input with Icon
    cy.get("#mat-input-2").invoke("val").should("not.be.empty");

    //Single Line Input with Prefix and Suffix
    cy.get("#mat-input-3").invoke("val").should("not.be.empty");

    //Disabled Single Line Input
    cy.get("#mat-input-4").should("be.disabled");

    //Single Line Input with Debounce
    cy.get("#mat-input-5").invoke("val").should("not.be.empty");

    //Single Line with Max Length
    cy.get("#mat-input-6").invoke("val").should("not.be.empty");

    //Single Line with Change on Blur
    cy.get("#mat-input-7").invoke("val").should("not.be.empty");

    //Multi-Line Input
    cy.get("#mat-input-8").invoke("val").should("not.be.empty");
  });

  it("Disabled Single Line Input!", () => {
    cy.get(":nth-child(5) > .fs-iframe-scrollto");

    cy.get("#mat-input-0").invoke("val").should("not.be.empty");

    //Single Line Input with Hint
    cy.get("#mat-input-1").invoke("val").should("not.be.empty");

    //Single Line Input with Icon
    cy.get("#mat-input-2").invoke("val").should("not.be.empty");

    //Single Line Input with Prefix and Suffix
    cy.get("#mat-input-3").invoke("val").should("not.be.empty");

    //Disabled Single Line Input
    cy.get("#mat-input-4").should("be.disabled");

    //Single Line Input with Debounce
    cy.get("#mat-input-5").invoke("val").should("not.be.empty");

    //Single Line with Max Length
    cy.get("#mat-input-6").invoke("val").should("not.be.empty");

    //Single Line with Change on Blur
    cy.get("#mat-input-7").invoke("val").should("not.be.empty");

    //Multi-Line Input
    cy.get("#mat-input-8").invoke("val").should("not.be.empty");
  });

  //here
  it("Single Line Input with Debounce!", () => {
    cy.get(":nth-child(6) > .fs-iframe-scrollto");

    cy.get("#mat-input-0").invoke("val").should("not.be.empty");

    //Single Line Input with Hint
    cy.get("#mat-input-1").invoke("val").should("not.be.empty");

    //Single Line Input with Icon
    cy.get("#mat-input-2").invoke("val").should("not.be.empty");

    //Single Line Input with Prefix and Suffix
    cy.get("#mat-input-3").invoke("val").should("not.be.empty");

    //Disabled Single Line Input
    cy.get("#mat-input-4").should("be.disabled");

    //Single Line Input with Debounce
    cy.get("#mat-input-5").invoke("val").should("not.be.empty");

    //Single Line with Max Length
    cy.get("#mat-input-6").invoke("val").should("not.be.empty");

    //Single Line with Change on Blur
    cy.get("#mat-input-7").invoke("val").should("not.be.empty");

    //Multi-Line Input
    cy.get("#mat-input-8").invoke("val").should("not.be.empty");
  });

  it("Single Line with Max Length!", () => {
    cy.get(":nth-child(7) > .fs-iframe-scrollto");

    cy.get("#mat-input-0").invoke("val").should("not.be.empty");

    //Single Line Input with Hint
    cy.get("#mat-input-1").invoke("val").should("not.be.empty");

    //Single Line Input with Icon
    cy.get("#mat-input-2").invoke("val").should("not.be.empty");

    //Single Line Input with Prefix and Suffix
    cy.get("#mat-input-3").invoke("val").should("not.be.empty");

    //Disabled Single Line Input
    cy.get("#mat-input-4").should("be.disabled");

    //Single Line Input with Debounce
    cy.get("#mat-input-5").invoke("val").should("not.be.empty");

    //Single Line with Max Length
    cy.get("#mat-input-6").invoke("val").should("not.be.empty");

    //Single Line with Change on Blur
    cy.get("#mat-input-7").invoke("val").should("not.be.empty");

    //Multi-Line Input
    cy.get("#mat-input-8").invoke("val").should("not.be.empty");
  });

  it("Single Line with Change on Blur!", () => {
    cy.get(":nth-child(8) > .fs-iframe-scrollto");

    cy.get("#mat-input-0").invoke("val").should("not.be.empty");

    //Single Line Input with Hint
    cy.get("#mat-input-1").invoke("val").should("not.be.empty");

    //Single Line Input with Icon
    cy.get("#mat-input-2").invoke("val").should("not.be.empty");

    //Single Line Input with Prefix and Suffix
    cy.get("#mat-input-3").invoke("val").should("not.be.empty");

    //Disabled Single Line Input
    cy.get("#mat-input-4").should("be.disabled");

    //Single Line Input with Debounce
    cy.get("#mat-input-5").invoke("val").should("not.be.empty");

    //Single Line with Max Length
    cy.get("#mat-input-6").invoke("val").should("not.be.empty");

    //Single Line with Change on Blur
    cy.get("#mat-input-7").invoke("val").should("not.be.empty");

    //Multi-Line Input
    cy.get("#mat-input-8").invoke("val").should("not.be.empty");
  });

  it("Multi-Line Input!", () => {
    cy.get(":nth-child(9) > .fs-iframe-scrollto");

    cy.get("#mat-input-0").invoke("val").should("not.be.empty");

    //Single Line Input with Hint
    cy.get("#mat-input-1").invoke("val").should("not.be.empty");

    //Single Line Input with Icon
    cy.get("#mat-input-2").invoke("val").should("not.be.empty");

    //Single Line Input with Prefix and Suffix
    cy.get("#mat-input-3").invoke("val").should("not.be.empty");

    //Disabled Single Line Input
    cy.get("#mat-input-4").should("be.disabled");

    //Single Line Input with Debounce
    cy.get("#mat-input-5").invoke("val").should("not.be.empty");

    //Single Line with Max Length
    cy.get("#mat-input-6").invoke("val").should("not.be.empty");

    //
    //Single Line with Change on Blur
    cy.get("#mat-input-7").invoke("val").should("not.be.empty");

    //Multi-Line Input
    cy.get("#mat-input-8").invoke("val").should("not.be.empty");
  });
});
