context('smoke', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        cy.visit('/', {
            retryOnNetworkFailure: true,
            retryOnStatusCodeFailure: true,
            headers: { 'cypress-test': 'cypress-test' },
        });
        cy.injectAxe();
    });

    it('should render the heading', () => {
        cy.contains(/Michael's NextJS Playground/).should('exist');
    });

    it('should have no a11y violations', () => {
        cy.checkAndLogA11y();
    });
});

export {};
