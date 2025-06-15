import React from 'react';
import './Welcome.css';

const Welcome = ({ onContinue }) => (
  <div className="welcome-container">
    <h1> Welcome to Your Day Planner </h1>
    <p>
      Planning your day helps reduce stress, increases focus, and brings joy to your accomplishments! ✨
    </p>
    <button onClick={onContinue}>Let's Begin 🌈</button>
  </div>
);

export default Welcome;
