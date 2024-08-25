describe('template spec', () => {

  //Login to the dashboard
    beforeEach('Login to dashboard and prints message', () => {

    //Go to page
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()

  })

  it('Displays details in log', () => {

    cy.get('.oxd-userdropdown-name').invoke('text').then((text) => {
        cy.log('Username:', text);
      })
      cy.get('.orangehrm-attendance-card-state').invoke('text').then((text) => {
        cy.log('Status:', text);
      })
      cy.get('.orangehrm-attendance-card-details').invoke('text').then((text) => {
        cy.log('Details:', text);
      })  
})

  it('Checks for to-do lists of the day', () => {

    cy.get(':nth-child(8) > .oxd-main-menu-item').click()
    cy.get('.orangehrm-todo-list > :nth-child(1) > .oxd-text').click()
    cy.get('.oxd-table-cell-actions > .oxd-icon-button').click()

  })

})
