describe('React App E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the homepage', () => {
    cy.contains('Demo React App');
  });

  it('should display the AddStudent component', () => {
    cy.contains('Add Student');
  });

  it('should display the StudentList component', () => {
    cy.contains('All Students');
  });

  it('should display the AddClassroom component', () => {
    cy.contains('Add Classroom');
  });

  it('should display the ClassroomList component', () => {
    cy.contains('All Classrooms');
  });

  it('should display the AddTeacher component', () => {
    cy.contains('Add Teacher');
  });

  it('should display the TeacherList component', () => {
    cy.contains('All Teachers');
  });

});