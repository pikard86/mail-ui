describe('App E2E', () => {

    it('should have company name on the header', () => {
        cy.visit('/');
        cy.get('h6')
            .should('have.text', 'Piko Soft');
    });

    it('should open inbox', () => {
        cy.visit('/');
        cy.get('[data-test-id=side-menu-inbox]').first().click();
    });
});