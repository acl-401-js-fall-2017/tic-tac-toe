import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { registerPlayer, move } from './actions';

class TicTacToe extends PureComponent {

  componentDidMount(){
    console.log(this.props);
    const { move } = this.props;
    move(0,0);
    move(0,1);
  }
  render(){
    const { move, board } = this.props;
    return (
      <div>
        <h1>TicTacToe</h1>
        <table>
          {board.map((row, r) => {
            console.log(row);
            row.map((col, c) => (
              <td key={c}>{col}</td>
            ));
            return (
              <tr key={r}>
              </tr>
            );
          })}
        </table>
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