const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Change this to your application's base URL
    supportFile: 'cypress/support/index.js',
    fixturesFolder: 'cypress/fixtures',
    specPattern: 'cypress/integration/**/*.spec.js',
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
  },
});