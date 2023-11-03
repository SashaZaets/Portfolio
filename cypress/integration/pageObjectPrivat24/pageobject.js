/// <reference types='Cypress" />
import {mobileReplenishment} from "./mobileReplenishmant";
import {transfers} from "./transfers";
import {basePage} from "./basePage";

it('Replenishment of Ukraine mobile phone number', ()=> {
        basePage.open('https://next.privat24.ua/mobile/lang=en')
        mobileReplenishment.typePhoneNumber('686979712')
        basePage.typeAmount('1')
        basePage.typeDebitCardData('4552331448138217', '0524', '111')
        basePage.submitPayment()
        cy.wait(5000)
        mobileReplenishment.checkDebitCard('4552 **** **** 8217')
});

it('Money transfer between foreign cards', ()=>{
         basePage.open('https://next.privat24.ua/money-transfer/card/lang=en')
         basePage.typeDebitCardData('4552331448138217', '0524', '111')
         transfers.typeNameAndSurname('Shayne', 'McConnell')
         transfers.typeReceiverCard('5309233034765085')
         transfers.typeReceiverNameAndSurname('Kate', 'Colin')
         basePage.typeAmount('300')
         transfers.typeComment('Cypress test')
         basePage.submitPayment()
});