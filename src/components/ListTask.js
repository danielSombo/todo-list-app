import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../features/taskSlice';
import Task from '../Task';

const ListTask = () => {
  const { tasks, filter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.isDone;
    if (filter === 'notDone') return !task.isDone;
    return true;
  });

  return (
    <div>
      <div className="flex justify-between mb-4">
        <button onClick={() => dispatch(setFilter('all'))} className="px-4 py-2 bg-gray-300 rounded-lg">
          Tous
        </button>
        <button onClick={() => dispatch(setFilter('done'))} className="px-4 py-2 bg-green-300 rounded-lg">
          Fait
        </button>
        <button onClick={() => dispatch(setFilter('notDone'))} className="px-4 py-2 bg-red-300 rounded-lg">
          Pas fait
        </button>
      </div>
      <div>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;
