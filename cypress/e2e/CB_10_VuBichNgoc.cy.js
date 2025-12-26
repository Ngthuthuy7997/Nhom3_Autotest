describe('Notes App - Full flow', () => {
    const email = `user_${Date.now()}@test.com`;
    const password = '12345678';
    const name = 'test';
    const noteTitle = 'My first note';
    const noteDesc = 'This is a test note';

    it('Register -> Login -> Add note -> Verify -> Delete note', () => {

        cy.visit('https://practice.expandtesting.com/notes/app');

        cy.get('[data-testid="open-register-view"]').click();

        cy.get('[data-testid="register-email"]').type(email);
        cy.get('#password').type(password);
        cy.get('#confirmPassword').type(password);
        cy.get('[data-testid="register-name"]').type(name);

        cy.get('button[type="submit"]').click();


        cy.get('[data-testid="login-view"]').click();

        cy.url().should('include', '/login');


        cy.get('#email').type(email);
        cy.get('#password').type(password);


        cy.get('button[type="submit"]').click();

        cy.url({ timeout: 10000 }).should('include', '/notes');

        cy.contains('button', 'Add Note').click();

        cy.get('#title').type(noteTitle);
        cy.get('#description').type(noteDesc);



        cy.get('select#category')
            .should('be.visible')
            .select('Work');


        cy.contains('button', 'Create').click();


        // cy.contains('.card', noteTitle, { timeout: 10000 })
        //     .should('be.visible')
        //     .and('contain.text', noteDesc);

        cy.get('.card', { timeout: 10000 })
            .should('contain.text', noteTitle)
            .and('contain.text', noteDesc);


        cy.get('[data-testid="note-delete"]').click();
        cy.get('[data-testid="note-delete-confirm"]').click();


        cy.contains('.card', noteTitle)
            .should('not.exist');
    });
});
