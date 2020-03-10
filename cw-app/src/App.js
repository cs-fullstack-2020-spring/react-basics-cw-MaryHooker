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
      <img className='App-logo' src='https://assets.foxdcg.com/dpp-uploaded/images/articles/new/newgirl.jpg'></img>
      <header className='Blue'>
        <Show showInfo = {show}></Show>
      </header>
    </div>
  );
}

export default App;
