
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
//import './commands'

// Alternatively you can use CommonJS syntax:
require('./commands.js')

Cypress.on('uncaught:exception', (_err, _runnable) => false);