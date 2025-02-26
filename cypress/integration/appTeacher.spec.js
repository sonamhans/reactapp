describe('AddTeacher Component E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should add a teacher', () => {
    cy.get('#teacher-id').type('1');
    cy.get('#teacher-firstName').type('Jane');
    cy.get('#teacher-lastName').type('Doe');
    cy.contains('Add Teacher').click();
    cy.contains('Jane Doe'); // Verify the teacher is added
  });
});


