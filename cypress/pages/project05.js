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

  choiceButton(label) {
    return label === 'Previous' ? this.getPreviusButon() : this.getNextButon()
  }
  PageHeadElVisible(title) {
    return this.getPage().contains(title)
  }

  /* Methods */

  clickButton(label) {
    this.choiceButton(label).click()
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
}
module.exports = Project05
