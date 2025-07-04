import React, { useState } from 'react';

const TaskManagerProject = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  return (
    <div className="space-page fade-in">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="content">
        <h2 className="animated-paragraph" style={{ animationDelay: '0s' }}>
          Task Manager Project
        </h2>
        <p className="animated-paragraph" style={{ animationDelay: '0.2s' }}>
          The Task Manager is a user-friendly web app that lets you add, view, and manage your daily tasks. It’s designed to help users stay organized and productive, and is a great example of a system development project.
        </p>
        <div className="glass-section animated-paragraph" style={{ animationDelay: '0.4s' }}>
          <h3>Try it out:</h3>
          <div style={{ maxWidth: 400, margin: "0 auto" }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="New task"
              style={{ padding: "0.5rem", width: "70%", marginRight: "0.5rem" }}
            />
            <button className="space-button" onClick={handleAddTask}>Add</button>
            <ul style={{ marginTop: "1rem" }}>
              {tasks.map((t, i) => (
                <li key={i} style={{ marginBottom: "0.5rem" }}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="glass-section animated-paragraph" style={{ animationDelay: '0.8s', textAlign: 'center' }}>
          <a href="/projects" className="space-button">← Back to Projects</a>
        </div>
      </div>
    </div>
  );
};

export default TaskManagerProject;