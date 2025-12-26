describe('Flaky Test - reload based', () => {

    beforeEach(() => {
        cy.visit('/flaky-test');
    });
    it("CB_11 Should eventually show Success after reloads", { retries: 10 }, () => {
        cy.contains("Ready")
            .should("exist")
            .should("be.visible")
            .click();
    });
});