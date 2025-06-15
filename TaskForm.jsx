import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="📝 What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">➕ Add</button>
    </form>
  );
};

export default TaskForm;
