import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_TEACHERS } from './queries';

const TeacherList = () => {
  const { loading, error, data } = useQuery(GET_ALL_TEACHERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;

  return (
    <div>
      <h2>All Teachers</h2>
      <ul>
        {data.getTeacher.map((teacher) => (
          <li key={teacher.id}>
            {teacher.firstName} {teacher.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherList;