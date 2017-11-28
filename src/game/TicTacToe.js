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
    const { board, turn: { current: currentTurn, first: firstTurn } } = this.props;
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