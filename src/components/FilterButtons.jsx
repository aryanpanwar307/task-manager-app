// src/components/FilterButtons.jsx
import React, { useCallback } from 'react';
import { useTasks } from '../context/TaskContext';

const FilterButtons = React.memo(() => {
  const { filter, setFilter, stats } = useTasks();

  const handleFilterChange = useCallback((newFilter) => {
    setFilter(newFilter);
  }, [setFilter]);

  const filters = [
    { value: 'all', label: 'All', count: stats.total },
    { value: 'pending', label: 'Pending', count: stats.pending },
    { value: 'completed', label: 'Completed', count: stats.completed },
  ];

  return (
    <div className="filter-section">
      <div className="filter-buttons">
        {filters.map(({ value, label, count }) => (
          <button
            key={value}
            onClick={() => handleFilterChange(value)}
            className={`filter-button ${filter === value ? 'active' : ''}`}
            aria-pressed={filter === value}
            aria-label={`Show ${label.toLowerCase()} tasks`}
          >
            {label}
            <span className="count-badge">{count}</span>
          </button>
        ))}
      </div>
      <div className="stats-summary">
        <span className="stat-item">
          <span className="stat-value">{stats.total}</span> Total
        </span>
        <span className="stat-divider">•</span>
        <span className="stat-item">
          <span className="stat-value">{stats.pending}</span> Active
        </span>
        <span className="stat-divider">•</span>
        <span className="stat-item">
          <span className="stat-value">{stats.completed}</span> Done
        </span>
      </div>
    </div>
  );
});

FilterButtons.displayName = 'FilterButtons';

export default FilterButtons;