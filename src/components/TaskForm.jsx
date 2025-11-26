// src/components/TaskForm.jsx
import React, { useState, useCallback } from 'react';
import { useTasks } from '../context/TaskContext';

const TaskForm = React.memo(() => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const { addTask } = useTasks();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    
    // Form validation - prevent empty tasks
    const trimmedValue = inputValue.trim();
    if (!trimmedValue) {
      setError('Task cannot be empty!');
      return;
    }

    if (trimmedValue.length < 3) {
      setError('Task must be at least 3 characters long!');
      return;
    }

    // Add the task
    addTask(trimmedValue);
    setInputValue('');
    setError('');
  }, [inputValue, addTask]);

  const handleInputChange = useCallback((e) => {
    setInputValue(e.target.value);
    if (error) setError(''); // Clear error on input
  }, [error]);

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="input-wrapper">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="What needs to be done?"
          className={`task-input ${error ? 'error' : ''}`}
          maxLength={200}
          aria-label="Task input"
          aria-invalid={!!error}
        />
        <button 
          type="submit" 
          className="add-button"
          aria-label="Add task"
        >
          <span className="plus-icon">+</span>
          Add Task
        </button>
      </div>
      {error && (
        <div className="error-message" role="alert">
          {error}
        </div>
      )}
    </form>
  );
});

TaskForm.displayName = 'TaskForm';

export default TaskForm;