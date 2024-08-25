describe('template spec', () => {

  //Login to the dashboard
    it('Login to dashboard and prints message', () => {

    //Go to page
    cy.visit('https://demo.applitools.com/')
    
    //Login using fetched values
    cy.get('#username').type('zabilac@mailper.com')
    cy.get('#password').type('Test@123')
    cy.get('#log-in').click()
  })
w
  after('', () => {

    cy.get('#time').invoke('text').then((text) => {
        cy.log('Message:', text);
      })

  })



})
