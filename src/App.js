import React, { Component } from 'react';
import './App.css';
import TicTacToe from './game/TicTacToe';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TicTacToe/>
      </div>
    );
  }
}

export default App;
