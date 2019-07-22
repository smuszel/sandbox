describe('basic', () => {
    it('matches previous screenshot', () => {
        cy.visit('/');
        cy.matchImageSnapshot();
    });
});
