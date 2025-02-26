import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_TEACHER } from './mutations';
import { GET_ALL_CLASSROOMS, GET_ALL_STUDENTS, GET_ALL_TEACHERS } from './queries';

const AddTeacher = () => {
  const [formData, setFormData] = useState({
    id: '',
    firstName: '',
    lastName: '',
  });

  const [createTeacher, { error }] = useMutation(CREATE_TEACHER, {
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
    createTeacher({ variables: { ...formData, id: parseInt(formData.id), classroomId: parseInt(formData.classroomId) } });
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
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Teacher</button>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};

export default AddTeacher;