import React, { Component } from 'react';
import './App.css';
import Game from '../game/Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Game/>
      </div>
    );
  }
}

export default App;
