import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ title, tasks, onToggle, onDelete, onEdit }) => (
  <div className="task-section">
    <h2>{title}</h2>
    {tasks.length === 0 ? (
      <p>No tasks 🌿</p>
    ) : (
      tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))
    )}
  </div>
);

export default TaskList;
