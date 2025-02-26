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
      <input
        type="number"
        name="id"
        placeholder="ID"
        value={formData.id}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="classroomId"
        placeholder="Classroom ID"
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