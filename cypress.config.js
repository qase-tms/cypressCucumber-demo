const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "cypress-qase-reporter",
    cypressQaseReporterReporterOptions: {
      /*
            // You can define the reporter options here, or in a separate `qase.config.json` file.

            mode: 'testops',
            debug: false,
            testops: {
              api: {
                token: 'api_key',
              },
              project: 'project_code',
              uploadAttachments: true,
              run: {
              //  id: 1,
                title: "Your test run title",
                description: "Automated Test run by Playwright",
                complete: true,
              },
              environment: 'prod',
            },
            framework: {
                cypress: {
                    screenshotsFolder: 'cypress/screenshots',
                }
            }
          */
    },
  },
  e2e: {
    async setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      require("cypress-qase-reporter/plugin")(on, config);
      require("cypress-qase-reporter/metadata")(on);
    },
    specPattern: "cypress/**/*.feature",
  },
});
