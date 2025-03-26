"use client"
import React, { useState, useEffect } from 'react';

interface Task {
    id: number;
    title: string;
    priority: "High" | "Medium" | "Low";
}

const TaskManager: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>(() => {
        if (typeof window !== "undefined") {
            const storedTasks = localStorage.getItem("tasks");
            return storedTasks ? (JSON.parse(storedTasks) as Task[]) : [];
        }
        return [];
    });
    const [newTask, setNewTask] = useState<Omit<Task, "id">>({ title: '', priority: 'Medium' });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (!newTask.title) return;
        setTasks((prevTasks) => [...prevTasks, { ...newTask, id: Date.now() }]);
        setNewTask({ title: '', priority: 'Medium' });
    };

    const deleteTask = (id: number) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    const priorityOrder: Record<Task["priority"], number> = {
        High: 1,
        Medium: 2,
        Low: 3,
    };

    const sortedTasks = [...tasks].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

    return (
        <div className="p-4 max-w-lg mx-auto">
            <h1 className="text-2xl mb-4">Priority Task Manager</h1>

            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    placeholder="Task title"
                    value={newTask.title}
                    onChange={(e) => setNewTask((prev) => ({ ...prev, title: e.target.value }))}
                    className="border p-2 rounded w-full"
                />
                <select
                    value={newTask.priority}
                    onChange={(e) => setNewTask((prev) => ({ ...prev, priority: e.target.value as Task["priority"] })
                    )
                }
                    className="border p-2 rounded"
                >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded">Add Task</button>
            </div>

            <ul>
                {sortedTasks.map((task) => (
                    <li key={task.id} className="flex justify-between p-2 border-b">
                        <span>{task.title} ({task.priority})</span>
                        <button onClick={() => deleteTask(task.id)} className="text-red-500">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskManager;
