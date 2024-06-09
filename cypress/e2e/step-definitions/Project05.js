const { Given, Then, When } = require('@badeball/cypress-cucumber-preprocessor')

const Project05 = require('../../pages/project05')

const proj = new Project05()

Given(/^the user is on "([^"]*)"$/, (url) => {
  cy.visit(url)
})

Then(/^the user should see the "([^"]*)" heading$/, (title) => {
  proj.validatePageHeadElVisible(title)
})

Then(/^the user should see the "([^"]*)" paragraph$/, (text) => {
  proj.validatePHeading(text)
})

Then(/^the user should see the "([^"]*)" button is disabled$/, (label) => {
  proj.choiceButton(label).should('be.disabled')
})

Then(/^the user should see the "([^"]*)" button is enabled$/, (label) => {
  proj.choiceButton(label).should('be.enabled')
})

When(/^the user clicks on the "([^"]*)" button$/, (label) => {
  proj.choiceButton(label).click()
})

When(/^the user clicks on the "([^"]*)" button till it becomes disabled$/, (label) => {
  proj.clickButtonTillitDisabled(label)
})

Then(/^the user should see "([^"]*)" City with the info below and an image$/, (cityName, dataTable) => {
  proj.verifyCityInfo(dataTable)
  proj.verifyCityImage(cityName)
})
