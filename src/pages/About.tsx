import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/data/dataSlice';
import { v4 as uuidv4 } from 'uuid';

const About = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    dispatch(addItem({ id: uuidv4(), name }));
    setName('');
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">New user</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-4 py-2 w-full rounded"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Create user
        </button>
      </form>
    </div>
  );
};

export default About;
