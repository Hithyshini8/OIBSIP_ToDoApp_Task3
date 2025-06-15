import React, { useState } from 'react';

const TaskItem = ({ task, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editVal, setEditVal] = useState(task.text);

  const handleEdit = () => {
    if (isEditing && editVal !== task.text) onEdit(task.id, editVal);
    setIsEditing(!isEditing);
  };

  return (
    <div className={`task-card ${task.completed ? 'completed' : 'pending'}`}>
      {isEditing ? (
        <input value={editVal} onChange={(e) => setEditVal(e.target.value)} />
      ) : (
        <p>{task.text}</p>
      )}
      <div className="task-actions">
        <button onClick={() => onToggle(task.id)}>✔</button>
        <button onClick={handleEdit}>{isEditing ? '💾' : '✏️'}</button>
        <button onClick={() => onDelete(task.id)}>🗑</button>
      </div>
      <small>{task.createdAt}{task.completedAt && ` | ✅ ${task.completedAt}`}</small>
    </div>
  );
};

export default TaskItem;
