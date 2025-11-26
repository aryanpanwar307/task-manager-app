// src/App.jsx
import React, { useEffect } from 'react';
import { TaskProvider, useTasks } from './context/TaskContext';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterButtons from './components/FilterButtons';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const AppContent = () => {
  const { theme } = useTasks();

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="app-container">
      <div className="app-wrapper">
        <header className="app-header">
          <div className="header-content">
            <div className="header-left">
              <h1 className="app-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="title-icon">
                  <path d="M9 11l3 3L22 4" strokeWidth="2" strokeLinecap="round" />
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" strokeWidth="2" />
                </svg>
                Task Manager
              </h1>
              <p className="app-subtitle">Organize your day, achieve your goals</p>
            </div>
            <ThemeToggle />
          </div>
        </header>

        <main className="app-main">
          <div className="task-container">
            <TaskForm />
            <FilterButtons />
            <TaskList />
          </div>
        </main>

        <footer className="app-footer">
          <p>
            Made with <span className="heart">❤</span> for LimeTray
          </p>
        </footer>
      </div>
    </div>
  );
};

function App() {
  return (
    <TaskProvider>
      <AppContent />
    </TaskProvider>
  );
}

export default App;