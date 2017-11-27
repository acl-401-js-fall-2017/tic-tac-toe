import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addMove, addRecord, clearBoard } from './actions';


export class Board extends PureComponent {
  
  handleChoice = function(choice){
    this.props.addMove(choice);
  }

  render(){
    let row1 = []; 
    let row2 = [];
    let row3 = [];
    function makeRow(){
      for(let i = 0; i < 3; i++){
        const position = this.props.moves.findIndex(move => i.toString() === move);
        const value = (position % 2 === 0) ? 'X' : 'O';
        const tableData = this.props.moves.includes(i.toString) ?
          <td data-value={i}></td> : <td data-value={i} onClick={({ target }) => this.handleChoice(target.dataset.value)}>empty</td>;
        row1.push(tableData);
      }
    }
    console.log('row1 ', row1);
    return(
      <div>
        <table className="board">
          <tbody>
            <tr>
              {row1}
            </tr>
            <tr>
              <td data-value="d" onClick={({ target }) => this.handleChoice(target.dataset.value)}>d</td>
              <td data-value="e" onClick={({ target }) => this.handleChoice(target.dataset.value)}>e</td>
              <td data-value="f" onClick={({ target }) => this.handleChoice(target.dataset.value)}>f</td>
            </tr>
            <tr>
              <td data-value="g" onClick={({ target }) => this.handleChoice(target.dataset.value)}>g</td>
              <td data-value="h" onClick={({ target }) => this.handleChoice(target.dataset.value)}>h</td>
              <td data-value="i" onClick={({ target }) => this.handleChoice(target.dataset.value)}>i</td>
            </tr>
          </tbody>
        </table>
        <input type="button" value="Clear Board" onClick={() => this.props.clearBoard()}/>
      </div>
    );
  }
}

export default connect(
  state => ({ moves: state.moves, record: state.record }),
  { addMove, addRecord, clearBoard }
)(Board);