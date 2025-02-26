describe('AddStudent Component E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should add a student', () => {
    cy.get('#student-id').type('1');
    cy.get('#student-name').type('John Doe');
    cy.get('#student-age').type('20');
    cy.get('#student-email').type('john.doe@example.com');
    cy.get('#student-classroomId').type('1');
    cy.contains('Add Student').click();
    cy.contains('John Doe'); // Verify the student is added
  });
});

