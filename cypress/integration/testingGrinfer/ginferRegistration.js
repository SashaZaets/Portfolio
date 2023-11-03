describe('Test Registration', () => {

    const user_email = 'power1234@gmail.com'
    const user_first_name = 'Nikolay'
    const user_last_name = 'Nik'
    const user_password = 'Q123456789q'

    it('test registration positive', () => {
        cy.visit('https://grinfer.com/');

        cy.get('.sc-2aalce-3')
            .should('be.visible')
            .click();

        cy.get('.sc-1cabfn5-0').should('contain', 'Create an account to get started');

        cy.get('#email')
            .type(user_email)
            .should('have.value', user_email);

        cy.get('#firstName')
            .type(user_first_name)
            .should('have.value', user_first_name);

        cy.get('#lastName')
            .type(user_last_name)
            .should('have.value', user_last_name);

        cy.get('#password')
            .type(user_password)
            .should('have.value', user_password);

        cy.get('.sc-p4qn9p-0')
            .should('be.visible')
            .click();


    })
})