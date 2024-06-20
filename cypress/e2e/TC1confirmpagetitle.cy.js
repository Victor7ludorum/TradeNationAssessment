// cypress/integration/trade_nation_page_title_spec.js

describe('Trade Nation Page Title Test', () => {
  it('should go to the specified URL and log the page title', () => {
    // Visit the URL
    cy.visit('https://tradenation.com/en-gb/markets/#forex');

    // Get the page title and log it to the console
    cy.title().then((title) => {
      cy.log(`The current page title is: ${title}`);
      // Optionally, you can also assert the title if you know what to expect
      
      //expect(title).to.equal('Expected Page Title');
      
    });
  });
});