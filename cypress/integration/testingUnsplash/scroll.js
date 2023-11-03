describe('Scrolling', () => {
    it('scroll to car', () => {
        cy.visit('https://unsplash.com/');
        cy.get('[data-test="homepage-header-search-form-input"]')
            .type('Car{enter}');
        cy.get('[data-test="page-header-title"]')
            .should('have.text', 'Car');
        cy.scrollTo(0, 1500);
        cy.get(':nth-child(3) > :nth-child(3) > .YdIix > :nth-child(1)')
            .click();
    })
})