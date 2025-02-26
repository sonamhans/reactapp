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
        name="code"
        placeholder="Code"
        value={formData.code}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="teacherId"
        placeholder="Teacher ID"
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