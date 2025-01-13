import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/taskSlice';

const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      dispatch(addTask({ id: Date.now(), description, isDone: false }));
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Ajouter une tâche"
        className="p-2 border rounded-lg mr-2"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
        Ajouter
      </button>
    </form>
  );
};

export default AddTask;
