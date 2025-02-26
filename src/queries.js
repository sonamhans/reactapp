import { gql } from '@apollo/client'

export const GET_ALL_STUDENTS = gql`
query GetAllStudents {
    getStudent{id, name, age, email, classroom{id, name, teacher{id, firstName}}}}`;

export const GET_ALL_CLASSROOMS = gql`
  query GetAllClassrooms {
    getClassroom {
      id
      name
      code
      teacherId
    }
  }
`;

export const GET_ALL_TEACHERS = gql`
  query GetAllTeachers {
    getTeacher {
      id
      firstName
      lastName
    }
  }
`;
