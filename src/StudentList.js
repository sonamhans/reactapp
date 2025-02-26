import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_STUDENTS } from './queries';
import Classroom from './Classroom'

const StudentList = () => {
  const { loading, error, data } = useQuery(GET_ALL_STUDENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;

  return (
    <div>
      <h2>All Students</h2>
      <ul>
        {data.getStudent.map((student) => (
          <li key={student.id}>
            ID:{student.id} Name:{student.name} Age:{student.age} Email:{student.email}
            {student.classroom ? (
                    <Classroom classroom={student.classroom} key={student.classroom.id} />
              ) : (
                <p>No classroom assigned</p>
              )}
          </li>

        ))}
      </ul>
    </div>
  );
};

export default StudentList;