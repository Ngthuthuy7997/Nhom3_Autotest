describe("test description", () => {
  beforeEach(() => {
    cy.visit("/shadowdom");
  });
  it("console", () => {
    cy.window().then((win) => {
      win.$("#my-btn").on("click", () => {
        win.alert("OK");
      });
    });
    it("shadow dom", () => {
      cy.contains("button", "This button is inside a Shadow DOM.", {
        includeShadowDom: true,
      }).click();
    });
    it("jalert", () => {
      cy.contains("button", "Here's a basic button example.").click();
      cy.on("window:alert", (alertText) => {
        expect(alertText).to.eq("OK");
      });
    });
  });
});