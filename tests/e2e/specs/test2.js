describe('Testing my website', function () {
  it('Visits the about page', function () {
    cy.visit('/');
    cy.contains('About').click();
    cy.url().should('include', '/about');
    cy.contains('h1', 'This is an about page');
  });
});

/*
  it('Does not do much!', function () {
    expect(true).to.equal(true);
  });
*/
