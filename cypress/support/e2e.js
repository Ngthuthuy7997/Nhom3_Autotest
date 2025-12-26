Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('adsbygoogle')) {
    return false; // không fail test
  }
});
import '@4tw/cypress-drag-drop';
import './commands'
import '@testing-library/cypress/add-commands'
require('cypress-xpath');