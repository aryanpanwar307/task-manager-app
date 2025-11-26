import React, { createContext, useContext, useCallback, useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = useLocalStorage('filter', 'all');
  const [theme, setTheme] = useLocalStorage('theme', 'light');


  const addTask = useCallback((taskText) => {
    const newTask = {
      id: Date.now().toString(),
      text: taskText,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  }, [setTasks]);

  const toggleTask = useCallback((taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }, [setTasks]);

  const deleteTask = useCallback((taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  }, [setTasks]);

  const reorderTasks = useCallback((startIndex, endIndex) => {
    setTasks(prevTasks => {
      const result = Array.from(prevTasks);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      return result;
    });
  }, [setTasks]);


  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }, [setTheme]);

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'pending':
        return tasks.filter(task => !task.completed);
      case 'all':
      default:
        return tasks;
    }
  }, [tasks, filter]);

  const stats = useMemo(() => ({
    total: tasks.length,
    completed: tasks.filter(task => task.completed).length,
    pending: tasks.filter(task => !task.completed).length,
  }), [tasks]);

  const value = useMemo(() => ({
    tasks,
    filteredTasks,
    filter,
    theme,
    stats,
    addTask,
    toggleTask,
    deleteTask,
    reorderTasks,
    setFilter,
    toggleTheme,
  }), [
    tasks,
    filteredTasks,
    filter,
    theme,
    stats,
    addTask,
    toggleTask,
    deleteTask,
    reorderTasks,
    setFilter,
    toggleTheme,
  ]);

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
};