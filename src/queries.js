import { gql } from '@apollo/client'

const GET_ALL_STUDENTS = gql`
{getStudent{id, name, age, email, classroom{id, name, teacher{id, firstName}}}}`

const GET_ALL_CLASSROOMS = gql`
  query Character($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        image
        status
        species
        location {
          name
        }
      }
  }
}`

const GET_ALL_TEACHERS = gql`
  query Character($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        image
        status
        species
        location {
          name
        }
      }
  }
}`

export { GET_ALL_STUDENTS, GET_ALL_CLASSROOMS, GET_ALL_TEACHERS}