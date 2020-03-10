import React from 'react';
import logo from './logo.svg';
import './App.css';
import Show from './Hulu';

function App() {
  let show = {
    name: 'New Girl',
    season: '8',
    genre: 'Comedy',
    rating: '100%'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Show showInfo = {show}></Show>
      </header>
    </div>
  );
}

export default App;
