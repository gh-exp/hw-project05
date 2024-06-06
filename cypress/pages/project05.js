class Project05 {
  /* Locators */
  getHeading() {
    return cy.get('.is-size-3')
  }
  getSubHeading() {
    return cy.get('#sub_heading')
  }

  getPHeading() {
    return cy.get('#content')
  }

  /* Methods */
  validateHeading(title) {
    return cy.contains(title)
  }

  validateSubHeading(title) {
    this.getSubHeading().should('have.text', title)
  }

  validatePHeading(text) {
    this.getPHeading().should('have.text', text)
  }
}
module.exports = Project05
