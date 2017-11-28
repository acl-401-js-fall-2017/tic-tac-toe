import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addMove, addRecord, clearBoard } from './actions';


export class Board extends PureComponent {
  
  handleChoice = function(choice){
    console.log('move', choice);
    const result = this.props.addMove(choice);
    console.log('I am result', result);

  }

  render(){
    const { moves, addMove } = this.props;
    const currentBoard = moves.map((square, i) => {
      const item = <li style={{ backgroundColor: 'white' }}key={i} onClick={(square === '_') ? () => this.handleChoice(i): null}><h1>{square}</h1></li>;
      return item; 
    });
    console.log('current board', currentBoard);  

    return(
      <div>
        <ul style={{ padding: '0px', backgroundColor: 'red', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', listStyle: 'none', height: '50vh', width: '50vw', gridGap: '5px' }}>
          {currentBoard}
        </ul> 
        <input type="button" value="New Game" onClick={() => this.props.clearBoard()}/>
      </div>
    );
  }
}

export default connect(
  state => ({ moves: state.game, record: state.record }),
  { addMove, addRecord, clearBoard }
)(Board);