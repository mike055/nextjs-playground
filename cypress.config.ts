import { Result } from 'axe-core';
import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        setupNodeEvents(on) {
            const options = {
                exclude: ['html > head > link'],
            };

            // `on` is used to hook into various events Cypress emits
            // `config` is the resolved Cypress config
            on('task', {
                // /** @param {import('axe-core').Result[]} violations */
                logA11yErrors(violations: Result[]) {
                    console.log('Accessibility errors detected!');
                    console.table(
                        violations.map((violation) => ({ ...violation, nodes: JSON.stringify(violation.nodes) })),
                    );
                    return null;
                },
            });
        },
        supportFile: 'cypress/support/index.{js,ts}',
        specPattern: '**/*.cy.{js,jsx,ts,tsx}',
        viewportWidth: 1200,
        viewportHeight: 800,
        chromeWebSecurity: false,
        reporterOptions: {
            reportDir: 'cypress/results',
            overwrite: true,
            html: true,
            json: true,
        },
        video: false,
        reporter: 'mochawesome',
        fixturesFolder: 'cypress/fixtures',
        screenshotsFolder: 'cypress/screenshots',
        videosFolder: 'cypress/videos',
        retries: {
            runMode: 2,
        },
        baseUrl: 'http://localhost:3000',
    },
});
