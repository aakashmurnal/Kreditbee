/// <reference types="Cypress"/>

// Kreditbee Page-Objects
import { kreditbeePage } from '../../kreditbeeTestPageObject/problemStatement';
/*
Test-Cases for Problem Statement
*/
describe('Verifying end to end flow for faq in kreditbee.', () => {
    /*
        Test-Case - 01
    */
    it('Visit kreditbee website and verify home page', () => {
        // Verify whether user able to launch the kreditbee site or not
        cy.visit(kreditbeePage.homeUrl)
        // Verify header name in home page
        cy.get(kreditbeePage.getHeader).contains(kreditbeePage.homePageHeadrText)
    })
    /*
        Test-Case - 02
    */
    it('Navigate to FQS and Count the all FAQ', () => {
        // Verify whether user able to navigate FQS
        cy.visit(kreditbeePage.faqUrl)
        // Get the FAQ count in About
        cy.get(kreditbeePage.getAboutFaq).find(kreditbeePage.faqTag)
        // Get the FAQ count in Loan App
        cy.get(kreditbeePage.getAboutFaq).find(kreditbeePage.faqTag)
        // Get the FAQ count in Credit Limit
        cy.get(kreditbeePage.getAboutFaq).find(kreditbeePage.faqTag)
        // Get the FAQ count in Repayment
        cy.get(kreditbeePage.getAboutFaq).find(kreditbeePage.faqTag)
        // Get the FAQ count in Interest, Processing fees and other Charges
        cy.get(kreditbeePage.getAboutFaq).find(kreditbeePage.faqTag)
        // Get the FAQ count in Miscellaneous
        cy.get(kreditbeePage.getAboutFaq).find(kreditbeePage.faqTag)
        // Get the FAQ count in E-commerce shopping Loans/E-voucher Loans
        cy.get(kreditbeePage.getAboutFaq).find(kreditbeePage.faqTag)
        // Get the FAQ count in NACH Auto Debit
        cy.get(kreditbeePage.getAboutFaq).find(kreditbeePage.faqTag)
        // Get the FAQ count in KreditBee Credit Risk Score
        cy.get(kreditbeePage.getAboutFaq).find(kreditbeePage.faqTag)


    })


})