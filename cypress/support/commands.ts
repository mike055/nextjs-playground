/// <reference types="cypress" />
import { Result } from 'axe-core';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            setupMockServer(): Chainable<void>;
            checkAndLogA11y(
                context: Parameters<typeof cy.checkA11y>[0],
                options: Parameters<typeof cy.checkA11y>[1],
            ): Chainable<void>;
        }
    }
}

export {};

Cypress.Commands.add('checkAndLogA11y', (context, options) => {
    return cy.checkA11y(context, options, (violations: Result[]) => cy.task('logA11yErrors', violations));
});

// }