import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_CLASSROOM } from './mutations';
import { GET_ALL_CLASSROOMS, GET_ALL_STUDENTS, GET_ALL_TEACHERS } from './queries';

const AddClassroom = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    code: '',
    teacherId: '',
  });

  const [createClassroom, { error }] = useMutation(CREATE_CLASSROOM, {
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
    createClassroom({ variables: { ...formData, teacherId: parseInt(formData.teacherId), id: parseInt(formData.id) } });

  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="classroom-id">ID:</label>
      <input
        id="classroom-id"
        type="number"
        name="id"
        value={formData.id}
        onChange={handleChange}
        required
      />
      <label htmlFor="classroom-name">Name:</label>
      <input
        id="classroom-name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="classroom-code">Code:</label>
      <input
        id="classroom-code"
        type="number"
        name="code"
        value={formData.code}
        onChange={handleChange}
        required
      />
      <label htmlFor="classroom-teacherId">Teacher ID:</label>
      <input
        id="classroom-teacherId"
        type="number"
        name="teacherId"
        value={formData.teacherId}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Classroom</button>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};

export default AddClassroom;