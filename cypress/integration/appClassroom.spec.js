describe('AddClassroom Component E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should add a classroom', () => {
    cy.get('#classroom-id').type('1');
    cy.get('#classroom-name').type('Math 101');
    cy.get('#classroom-code').type('1');
    cy.get('#classroom-teacherId').type('1');
    cy.contains('Add Classroom').click();
    cy.contains('Math 101'); // Verify the classroom is added
  });
});