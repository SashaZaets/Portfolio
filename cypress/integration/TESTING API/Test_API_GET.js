describe('Test API GET', () => {
    it('Get-test', () => {
        cy.request('GET', 'https://swapi.dev/api/people/1/').then((response) => {
          expect(response).to.have.property('status', 200)
            expect(response).to.not.be.null
            expect(response.body.films).to.have.length(4);
        })
    })
})