import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addMove, addRecord, clearBoard } from './actions';


export class Board extends PureComponent {
  
  handleChoice = function(choice){
    this.props.addMove(choice);
  }

  render(){
    
    return(
      <div>
        <table className="board">
          <tbody>
            <tr>
              <td data-value="a" onClick={({ target }) => this.handleChoice(target.dataset.value)}>a</td>
              <td data-value="b" onClick={({ target }) => this.handleChoice(target.dataset.value)}>b</td>
              <td data-value="c" onClick={({ target }) => this.handleChoice(target.dataset.value)}>c</td>
            </tr>
            <tr>
              <td data-value="d" onClick={({ target }) => console.log(target.dataset.value)}>d</td>
              <td data-value="e" onClick={({ target }) => console.log(target.dataset.value)}>e</td>
              <td data-value="f" onClick={({ target }) => console.log(target.dataset.value)}>f</td>
            </tr>
            <tr>
              <td data-value="g" onClick={({ target }) => console.log(target.dataset.value)}>g</td>
              <td data-value="h" onClick={({ target }) => console.log(target.dataset.value)}>h</td>
              <td data-value="i" onClick={({ target }) => console.log(target.dataset.value)}>i</td>
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