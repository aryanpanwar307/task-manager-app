// src/components/TaskItem.jsx
import React, { useCallback } from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { useTasks } from '../context/TaskContext';

const TaskItem = React.memo(({ task, index }) => {
  const { toggleTask, deleteTask } = useTasks();

  const handleToggle = useCallback(() => {
    toggleTask(task.id);
  }, [toggleTask, task.id]);

  const handleDelete = useCallback(() => {
    deleteTask(task.id);
  }, [deleteTask, task.id]);

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`task-item ${task.completed ? 'completed' : ''} ${
            snapshot.isDragging ? 'dragging' : ''
          }`}
        >
          <div className="task-content">
            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={handleToggle}
                id={`task-${task.id}`}
                className="task-checkbox"
                aria-label={`Mark task "${task.text}" as ${
                  task.completed ? 'incomplete' : 'complete'
                }`}
              />
              <label htmlFor={`task-${task.id}`} className="checkbox-label">
                <span className="checkmark">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="20 6 9 17 4 12" strokeWidth="3" />
                  </svg>
                </span>
              </label>
            </div>
            <span className="task-text">{task.text}</span>
          </div>
          <div className="task-actions">
            <span className="drag-handle" title="Drag to reorder">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <circle cx="9" cy="5" r="1.5" />
                <circle cx="9" cy="12" r="1.5" />
                <circle cx="9" cy="19" r="1.5" />
                <circle cx="15" cy="5" r="1.5" />
                <circle cx="15" cy="12" r="1.5" />
                <circle cx="15" cy="19" r="1.5" />
              </svg>
            </span>
            <button
              onClick={handleDelete}
              className="delete-button"
              aria-label={`Delete task "${task.text}"`}
              title="Delete task"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" strokeWidth="2" />
                <line x1="10" y1="11" x2="10" y2="17" strokeWidth="2" />
                <line x1="14" y1="11" x2="14" y2="17" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
});

TaskItem.displayName = 'TaskItem';

export default TaskItem;