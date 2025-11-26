import React, { useCallback } from 'react';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import { useTasks } from '../context/TaskContext';
import TaskItem from './TaskItem';

const TaskList = React.memo(() => {
  const { filteredTasks, reorderTasks, filter } = useTasks();

  const onDragEnd = useCallback((result) => {
    if (!result.destination) {
      return;
    }

    reorderTasks(result.source.index, result.destination.index);
  }, [reorderTasks]);

  if (filteredTasks.length === 0) {
    return (
      <div className="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="empty-icon">
          <path d="M9 11l3 3L22 4" strokeWidth="2" strokeLinecap="round" />
          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" strokeWidth="2" />
        </svg>
        <h3>No tasks {filter !== 'all' ? filter : 'yet'}!</h3>
        <p>
          {filter === 'completed' && "You haven't completed any tasks yet."}
          {filter === 'pending' && "All tasks are completed! Great job!"}
          {filter === 'all' && "Add a task to get started."}
        </p>
      </div>
    );
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="tasks">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`task-list ${snapshot.isDraggingOver ? 'drag-over' : ''}`}
          >
            {filteredTasks.map((task, index) => (
              <TaskItem key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
});

TaskList.displayName = 'TaskList';

export default TaskList;