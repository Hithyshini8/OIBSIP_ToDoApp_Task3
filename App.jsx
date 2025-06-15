import React, { useState, useEffect } from 'react';
import Welcome from './pages/Welcome';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('tasks');
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toLocaleString(),
      completedAt: null,
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed, completedAt: !task.completed ? new Date().toLocaleString() : null }
        : task
    ));
  };

  const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));

  const editTask = (id, newText) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, text: newText } : task));
  };

  const pending = tasks.filter(task => !task.completed);
  const completed = tasks.filter(task => task.completed);

  return (
    <div className="App">
      {showWelcome ? (
        <Welcome onContinue={() => setShowWelcome(false)} />
      ) : (
        <>
          <h1>To-Do App</h1>
          <TaskForm onAdd={addTask} />
          <div className="task-columns">
            <TaskList title="⏳ Pending Tasks" tasks={pending} onToggle={toggleComplete} onDelete={deleteTask} onEdit={editTask} />
            <TaskList title="✅ Completed Tasks" tasks={completed} onToggle={toggleComplete} onDelete={deleteTask} onEdit={editTask} />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
