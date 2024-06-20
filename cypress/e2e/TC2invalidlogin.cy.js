// cypress/integration/login_with_google_spec.js

describe('Login with Google Test', () => {
  it('should log in using Google and validate with an invalid ID', () => {
    // Visit the login URL
    cy.visit('https://tradenation.com/login');

    // Click on the 'Log in with Google' button
    // Some trouble identifying the Trade Nation Logo (further web element locator work needed)
    cy.get('button.google-login').click(); // Adjust the selector if needed

    // Click on 'use another account' icon
    cy.get('div[jsname="h9tEkc"]').click(); // Adjust the selector if needed

    // Enter the word 'testing' in the email/phone input field
    cy.get('input[type="email"]').type('testing');

    // Click on the 'Next' button
    cy.get('#identifierNext').click(); // Adjust the selector if needed

  });
});
