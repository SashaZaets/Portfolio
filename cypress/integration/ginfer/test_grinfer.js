describe('Test Grinfer', () => {
    it('test grinfer btn', () => {
        cy.visit('https://grinfer.com/');
        cy.viewport(1920, 1080);
        cy.get('div[class="sc-286flp-1 UlYKM"]').should('be.visible').click();
        cy.get('a[class="sc-8lxa00-9 iMNWlz"]').should('be.visible').contains('Design').click();
    })
})