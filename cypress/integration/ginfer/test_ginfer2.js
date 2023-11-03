describe('Test Grinfer input', () => {
    it('test grinfer inp', () => {
        cy.visit('https://grinfer.com/');
        cy.viewport(1920, 1080);
        cy.get('input[type="text"]').type('sport');
        cy.get('button[class="sc-tghwm-0 sc-1q9s0sp-5 eJKhbS hsfeJX"]').should('be.visible').click();
        cy.get('a[class="sc-1m292s3-1 dgepQD sc-g7i5pe-4 kVSgqS"]').should('be.visible').contains('Sports injury rehabilitation').click();
        cy.get('a[class="sc-1xj3xob-0 ezBrmu sc-1dqgp31-2 dLiCGc"]').should('be.visible').contains('Try for free').click();
        cy.get('div[class="sc-1cvap0g-1 ctZodC"]').should('be.visible');

    })
})