import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_CLASSROOMS } from './queries';

const ClassroomList = () => {
  const { loading, error, data } = useQuery(GET_ALL_CLASSROOMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;

  return (
    <div>
      <h2>All Classrooms</h2>
      <ul>
        {data.getClassroom.map((classroom) => (
          <li key={classroom.id}>
            Id:{classroom.id} Name: {classroom.name} Code:({classroom.code}) - Teacher Id: {classroom.teacherId}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassroomList;