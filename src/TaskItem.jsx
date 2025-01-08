import React, { useState } from "react";

function TaskItem({ task, updateTask, deleteTask, toggleComplete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [taskName, setTaskName] = useState(task.name);
    const [taskDescription, setTaskDescription] = useState(task.description);

    const handleSave = () => {
        const updatedTask = { ...task, name: taskName, description: taskDescription };
        updateTask(task.id, updatedTask);
        setIsEditing(false);
    };

    return (
        <div className={`p-4 border rounded-lg ${task.completed ? "bg-green-100 border-green-500" : "bg-white border-gray-300"} shadow-sm`}>
        {isEditing ? (
            <div className="space-y-4">
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="text"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button onClick={handleSave} className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                Sauvegarder
            </button>
            </div>
        ) : (
            <div>
                <h3 className="text-lg font-semibold">{task.name}</h3>
                <p className="text-gray-600">{task.description}</p>
                <div className="mt-4 space-x-4">
                    <button
                    onClick={() => toggleComplete(task.id)}
                    className={`py-2 px-4 text-white ${task.completed ? "bg-gray-500" : "bg-blue-500"} rounded-lg hover:bg-blue-600 transition-colors`}
                    >
                    {task.completed ? "Non terminé" : "Terminé"}
                    </button>
                    <button
                    onClick={() => setIsEditing(true)}
                    className="py-2 px-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
                    >
                    Modifier
                    </button>
                    <button
                    onClick={() => deleteTask(task.id)}
                    className="py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    >
                    Supprimer
                    </button>
                </div>
            </div>
        )}
        </div>
    );
}

export default TaskItem;
