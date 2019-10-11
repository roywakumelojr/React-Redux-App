import React from 'react';
import './App.css';

import JokeList from './components/JokeList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Programming Jokes</h1>
        <h2>Warning! none programmers may ! understand some || any of the presented jokes</h2>
        <JokeList />
      </header>
    </div>
  );
}

export default App;
