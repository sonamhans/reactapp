import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_STUDENT } from './mutations';
import { GET_ALL_CLASSROOMS, GET_ALL_STUDENTS, GET_ALL_TEACHERS } from './queries';

const AddStudent = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    age: '',
    email: '',
    classroomId: '',
  });

  const [createStudent, { error }] = useMutation(CREATE_STUDENT, {
    refetchQueries: [{ query: GET_ALL_CLASSROOMS }, { query: GET_ALL_STUDENTS }, { query: GET_ALL_TEACHERS }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createStudent({ variables: { ...formData, id: parseInt(formData.id),
    age: parseInt(formData.age), classroomId: parseInt(formData.classroomId)
    } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="student-id">ID:</label>
      <input
        id="student-id"
        type="number"
        name="id"
        value={formData.id}
        onChange={handleChange}
        required
      />
      <label htmlFor="student-name">Name:</label>
      <input
        id="student-name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="student-age">Age:</label>
      <input
        id="student-age"
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        required
      />
      <label htmlFor="classroom-email">Email:</label>
      <input
        id="student-email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <label htmlFor="student-classroomId">Classroom ID:</label>
      <input
        id="student-classroomId"
        type="number"
        name="classroomId"
        value={formData.classroomId}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Student</button>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};

export default AddStudent;