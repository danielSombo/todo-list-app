import React, { useState } from "react";

function TaskForm({ addTask }) {
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskName || !taskDescription) {
            alert("Tous les champs sont requis.");
            return;
        }

    const newTask = {
        id: Date.now(),
        name: taskName,
        description: taskDescription,
        completed: false,
    };
    addTask(newTask);
    setTaskName("");
    setTaskDescription("");
};

    return (
        <form onSubmit={handleSubmit} className="mb-6 space-y-4">
            <div>
                <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Nom de la tâche"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div>
                <input
                type="text"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                placeholder="Description"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Ajouter une tâche
            </button>
        </form>
    );
}

export default TaskForm;
