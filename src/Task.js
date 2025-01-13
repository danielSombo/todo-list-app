import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../taskSlice';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    if (isEditing && newDescription.trim()) {
      dispatch(editTask({ id: task.id, description: newDescription }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={`flex items-center justify-between p-2 ${task.isDone ? 'bg-green-100' : 'bg-white'} border rounded-lg mb-2`}>
      {isEditing ? (
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          className="p-1 border rounded-lg flex-grow mr-2"
        />
      ) : (
        <span className={task.isDone ? 'line-through' : ''}>{task.description}</span>
      )}
      <div className="space-x-2">
        <button onClick={handleToggle} className="px-2 py-1 bg-gray-200 rounded-lg">
          {task.isDone ? 'Pas fait' : 'Fait'}
        </button>
        <button onClick={handleEdit} className="px-2 py-1 bg-yellow-300 rounded-lg">
          {isEditing ? 'Sauvegarder' : 'Modifier'}
        </button>
      </div>
    </div>
  );
};

export default Task;
