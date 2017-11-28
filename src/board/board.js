import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addMove, addRecord, clearBoard } from './actions';


export class Board extends PureComponent {
  
  handleChoice = function(choice){
    this.props.addMove(choice);
  }

  render(){
    const { moves, turn } = this.props;
    const currentBoard = moves.map((square, i) => {
      const item = <li key={i} onClick={() => this.handleChoice(i)}>{square}</li>;
      return item; 
    });  

    return(
      <div>
        <ul>
          {currentBoard}
        </ul> 
        <input type="button" value="Clear Board" onClick={() => this.props.clearBoard()}/>
      </div>
    );
  }
}

export default connect(
  state => ({ moves: state.moves, record: state.record }),
  { addMove, addRecord, clearBoard }
)(Board);