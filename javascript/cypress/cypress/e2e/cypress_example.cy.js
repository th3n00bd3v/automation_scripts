describe('template spec', () => {
  it('Go to Get page and perform actions', () => {

    //Go to page
    cy.visit('https://example.cypress.io')
    
    //Go to Querying section URL and asset URL string
    cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)')
    .click()
    cy.url().should('include', '/commands/querying')
  
    //Get button command
    cy.get('#query-btn').should('contain', 'Button').click()
    
    //Pass input params
    cy.get('#inputName').type('cypress.io')
    cy.get('#inputEmail').type('zabilac8798@cypress.io')
    cy.get('#inputPassword').type('Test@1234')
  
  })
})