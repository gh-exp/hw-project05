class Project05 {
  /* Locators */

  getPage() {
    return cy.get('.has-background-white-ter')
  }

  getPHeading() {
    return cy.get('#content')
  }

  getPreviusButon() {
    return cy.get('#previous')
  }

  getNextButon() {
    return cy.get('#next')
  }

  getImage() {
    return cy.get('.city_image')
  }

  getInfo() {
    return cy.get('.Pagination_pagBodyData__vG6oj > p')
  }

  /* Methods */

  validatePageHeadElVisible(title) {
    return this.getPage().contains(title).should('be.visible')
  }

  validatePHeading() {
    this.getPHeading().should('be.visible')
  }

  choiceButton(label) {
    return label === 'Previous' ? this.getPreviusButon() : this.getNextButon()
  }

  clickButtonTillitDisabled(label) {
    this.choiceButton(label).then(($button) => {
      function clickUntilDisabled() {
        if (!$button.is(':disabled')) {
          cy.wrap($button).click()
          cy.wait(100).then(() => clickUntilDisabled())
        }
      }
      clickUntilDisabled()
    })
  }

  verifyCityInfo(dataTable) {
    const arr = dataTable.rawTable.flat()

    this.getInfo().each(($el, index) => {
      cy.log(arr[index])
      cy.wrap($el).should('be.visible').and('contain', arr[index])
    })
  }

  verifyCityImage(cityName) {
    this.getImage().should('be.visible').and('have.attr', 'alt', cityName)
  }
}

module.exports = Project05
