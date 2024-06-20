// cypress/integration/find_trade_nation_logo_id_spec.js

describe('Find Trade Nation Logo ID Test', () => {
  it('should go to the specified URL and find the ID of the Trade Nation logo', () => {
    // Visit the URL
    cy.visit('https://tradenation.com/en-gb/');

    // Find the Trade Nation logo element and log its ID
    cy.get('[data-id="diamond"]').then(($logo) => {
      const logoId = $logo.attr('id');
      cy.log(`The ID of the Trade Nation logo is: ${logoId}`);

      // click on the Trade Nation Logo
      // Some trouble identifying the Trade Nation Logo (further web element locator work needed)
      cy.get('[data-id="diamond"]').click(); // Adjust the selector if needed
    });
  });
});
