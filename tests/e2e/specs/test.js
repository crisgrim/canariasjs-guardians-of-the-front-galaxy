// https://docs.cypress.io/api/introduction/api.html

describe('Visit main route', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'My Videogames List');
  });
});
