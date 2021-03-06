import React from 'react';

import './App.css';

function Hulu(prop) {
  return (
    <div>
      <header className = "App-header">
        <p>Name: {prop.showInfo.name}</p>
        <p>Seasons: {prop.showInfo.season}</p>
        <p>Genre: {prop.showInfo.genre}</p>
        <p>Rotten Tomatoes: {prop.showInfo.rating}</p>
      </header>
    </div>
  );
}

export default Hulu;
