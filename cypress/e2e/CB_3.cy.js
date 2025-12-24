describe("test description", () => {
  beforeEach(() => {
    cy.visit("https://practice.expandtesting.com/shadowdom");
  });
  // code here
  it("console", () => {
    // code here

    cy.window().then((win) => {
      win.$("#my-btn").on("click", () => {
        win.alert("OK");
      });
    });

    //
    it("shadow dom", () => {
      // code here
      cy.contains("button", "This button is inside a Shadow DOM.", {
        includeShadowDom: true,
      }).click();
    });

    //
    it("jalert", () => {
      // code here
      cy.contains("button", "Here's a basic button example.").click();
      cy.on("window:alert", (alertText) => {
        expect(alertText).to.eq("OK");
      });
    });
  });
});