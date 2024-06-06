const { Given } = require('@badeball/cypress-cucumber-preprocessor')

const Project05 = require('../../pages/project05')

const proj = new Project05()

Given(/^the user is on "([^"]*)"$/, (url) => {
  cy.visit(url)
})

Then(/^the user should see the "([^"]*)" heading$/, (title) => {
  proj.validateHeading(title).should('be.visible')
})

// Then(/^the user should see the "([^"]*)" heading$/, (title) => {
//   proj.validateSubHeading(title)
// })

// Then(/^the user should see the "([^"]*)" paragraph$/, (text) => {
//   proj.validatePHeading(text)
// })
