import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, updateTask, deleteTask, toggleComplete }) {
    return (
        <div className="space-y-4">
        {tasks.length === 0 ? (
            <p className="text-center text-gray-500">Aucune tâche à afficher.</p>
        ) : (
            tasks.map((task) => (
            <TaskItem
                key={task.id}
                task={task}
                updateTask={updateTask}
                deleteTask={deleteTask}
                toggleComplete={toggleComplete}
            />
            ))
        )}
        </div>
    );
}

export default TaskList;
