import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);
  const updateTask = (id, updatedTask) => setTasks(tasks.map(task => task.id === id ? updatedTask : task));
  const deleteTask = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette tâche ?")) {
      setTasks(tasks.filter(task => task.id !== id));
    }
  };
  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 flex justify-center items-center">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-semibold text-center text-blue-600 mb-8">Liste de Tâches</h1>
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} toggleComplete={toggleComplete} />
      </div>
    </div>
  );
}

export default App;
