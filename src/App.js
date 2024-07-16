// src/App.js
import React, { useState } from 'react';
import GitHubRepos from './components/GitHubRepos';
import './App.css';

const App = () => {
  const [username, setUsername] = useState('');
  const [submittedUsername, setSubmittedUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedUsername(username);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub Repos Viewer</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
          />
          <button type="submit">Get Repos</button>
        </form>
        {submittedUsername && <GitHubRepos username={submittedUsername} />}
      </header>
    </div>
  );
};

export default App;
