import { gql } from '@apollo/client';

export const CREATE_STUDENT = gql`
  mutation CreateStudent($id: Int!, $name: String!, $age: Int!, $email: String!, $classroomId: Int!) {
    createStudent(id: $id, name: $name, age: $age, email: $email, classroomId: $classroomId) {
      id
      name
      age
      email
      classroomId
    }
  }
`;

export const CREATE_CLASSROOM = gql`
  mutation CreateClassroom($id: Int!, $name: String!, $code: String!, $teacherId: Int!) {
    createClassroom(id: $id, name: $name, code: $code, teacherId: $teacherId) {
      id
      name
      code
      teacherId
    }
  }
`;

export const CREATE_TEACHER = gql`
  mutation CreateTeacher($id: Int!, $firstName: String!, $lastName: String!) {
    createTeacher(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`;