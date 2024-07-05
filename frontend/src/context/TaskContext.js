import React, { createContext, useState, useEffect } from 'react';
import taskService from '../services/taskService';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
        const fetchTasks = async () => {
            const tasks = await taskService.getTasks();
            setTasks(tasks);
        };
        fetchTasks();}
    }, []);

    const addTask = async (task) => {
        const newTask = await taskService.createTask(task);
        setTasks([...tasks, newTask]);
    };

    const updateTask = async (id, updatedTask) => {
        const newTask = await taskService.updateTask(id, updatedTask);
        setTasks(tasks.map((task) => (task._id === id ? newTask : task)));
    };

    const deleteTask = async (id) => {
        await taskService.deleteTask(id);
        setTasks(tasks.filter((task) => task._id !== id));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskContext;
