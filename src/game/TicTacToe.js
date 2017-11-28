import React, { PureComponent } from 'react';
import Tile from './Tile';
import { connect } from 'react-redux';
import { registerPlayer, move } from './actions';
import "./TicTacToe.css";

class TicTacToe extends PureComponent {

  handleMove = (row, col) => {
    this.props.move(row, col);
  }

  render(){
    const { board, player, turn: { current: currentTurn, first: firstTurn } } = this.props;
    return (
      <div>
        <h1>TicTacToe</h1>
        <table
          style={{
            margin: 'auto'
          }}
        >
          <tbody>
            {board.map((row, r) => (
              <tr key={r}>
                {row.map((tile, c) => (
                  <Tile
                    key={c}
                    mark={tile}
                    row={r}
                    col={c}
                    onMove={this.handleMove}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <h3>
          <span>Player {currentTurn}'s turn</span>
          <span>Player {firstTurn}'s advantage</span>
        </h3>
        <div 
          className="player-records"
          style={{
            display: 'flex',
            justifyContent: 'space-around'
          }}
        >
          <section className="playerX-records">
            <h4>{player.X.name}</h4>
            <p>wins: {player.X.wins}</p>
            <p>losses: {player.X.losses}</p>
            <p>ties: {player.X.ties}</p>
          </section>
          <section className="playerO-records">
            <h4>{player.O.name}</h4>
            <p>wins: {player.O.wins}</p>
            <p>losses: {player.O.losses}</p>
            <p>ties: {player.O.ties}</p>
          </section>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}



const ConnectedTicTacToe = connect(
  mapStateToProps,
  { registerPlayer, move }
)(TicTacToe);

export default ConnectedTicTacToe;