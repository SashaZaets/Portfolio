export class Login {
    buttonVisibleClick(selector) {
       return  cy.get(selector)
           .should('be.visible')
           .click();
    }
    EmPasLog(email, password) {
        cy.get("#user_email")
            .type(email)
            .should('have.value', email);

        cy.get("#user_password")
            .type(password)
            .should('have.value', password);
    }
}
export const login = new Login();