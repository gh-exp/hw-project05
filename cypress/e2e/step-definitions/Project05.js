const { Given } = require("@badeball/cypress-cucumber-preprocessor")

Given('user navigates to {string}', (url) => {
  cy.visit(url)
})
