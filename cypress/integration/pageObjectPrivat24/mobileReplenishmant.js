export class MobilePhoneReplenishment {
    typePhoneNumber(PhoneNumber){
        cy.get('[data-qa-node="phone-number"]')
            .type(PhoneNumber)
    }

    checkDebitCard(debitCard){
        cy.get('[data-qa-node="card"]')
            .should('have.text', debitCard)
    }


}
export const mobileReplenishment = new MobilePhoneReplenishment()