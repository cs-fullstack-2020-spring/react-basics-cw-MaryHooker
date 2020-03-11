import React from 'react';
import './App.css';
import Hulu from './Hulu';

function App() {
  let show = {
    name: 'New Girl',
    season: '7',
    genre: 'Sitcom',
    rating: '86%'
  }
  return (
    <div className="App">
      <img className='App-logo' alt='newGirl' src='https://assets.foxdcg.com/dpp-uploaded/images/articles/new/newgirl.jpg'></img>
      <header className='Blue'>
      <Hulu showInfo = {show}></Hulu>
      </header>
    </div>
  );
}

export default App;
