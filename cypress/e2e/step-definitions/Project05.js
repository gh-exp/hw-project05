const { Given, Then, When } = require('@badeball/cypress-cucumber-preprocessor')

const Project05 = require('../../pages/project05')

const proj = new Project05()

Given(/^the user is on "([^"]*)"$/, (url) => {
  cy.visit(url)
})

Then(/^the user should see the "([^"]*)" heading$/, (title) => {
  proj.PageHeadElVisible(title).should('be.visible')
})

Then(/^the user should see the "([^"]*)" paragraph$/, (text) => {
  proj.getPHeading(text).should('be.visible')
})

Then(/^the user should see the "([^"]*)" button is disabled$/, (label) => {
  proj.choiceButton(label).should('be.disabled')
})

Then(/^the user should see the "([^"]*)" button is enabled$/, (label) => {
  proj.choiceButton(label).should('be.enabled')
})

When(/^the user clicks on the "([^"]*)" button$/, (label) => {
  proj.clickButton(label)
})

When(/^the user clicks on the "([^"]*)" button till it becomes disabled$/, (label) => {
  proj.clickButtonTillitDisabled(label)
})

Then(/^the user should see "([^"]*)" City with the info below and an image$/, (cityName, dataTable) => {
  const arr = dataTable.rawTable.flat()

  proj.getInfo().each(($el, index) => {
    cy.log(arr[index])
    cy.wrap($el).should('be.visible').and('contain', arr[index])
  })

  proj.getImage().should('be.visible').and('have.attr', 'alt', cityName)
})
