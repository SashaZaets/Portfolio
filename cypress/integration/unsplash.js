import {login} from "./PageObject/login";

describe('Assert', () => {
    it('Assert Web Test', () => {
        cy.visit('https://unsplash.com/');
        cy.location('protocol').should('eq', 'https:');
        cy.title().should('eq', 'Beautiful Free Images & Pictures | Unsplash');

        login.buttonVisibleClick('a[href="https://unsplash.com/login"]');
        login.EmPasLog('power12345@gmail.com', 'password123' );
        login.buttonVisibleClick('input[type="submit"]');
        cy.contains('Invalid email or password.').should('be.visible')

    })
})
