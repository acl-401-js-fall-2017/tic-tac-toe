import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { takeTurn, addRecord, clearBoard } from './actions';


class Board extends PureComponent {
  
  handleChoice = choice => {
    this.props.takeTurn(choice);
  }

  render(){
    const { gameLog, record } = this.props;

    const currentBoard = gameLog.map((square, i) => {
      return( 
        <li style={{ backgroundColor: 'white' }}key={i} 
          onClick={(square === '') ? () => this.handleChoice(i): null}>
          <h1>{square}</h1>
        </li>
      );
    });

    console.log('current board', currentBoard);

    const boardStyle = { 
      padding: '0px',
      backgroundColor: 'black',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      listStyle: 'none',
      height: '50vh', 
      width: '50vw',
      gridGap: '5px'
    };

    let player1wins = 0;
    let player2wins = 0;
    let tieGames = 0;
    record.forEach(result => {
      if(result === 'player1') player1wins += 1;
      if(result === 'player2') player2wins += 1; 
      if(result === 'TIE') tieGames += 1; 
    });


    return(
      <div>
        <ul style={boardStyle}>
          {currentBoard}
        </ul> 
        <input type="button" value="New Game" onClick={() => this.props.clearBoard()}/>
        <h4>player1 wins: { player1wins }</h4>
        <h4>player2 wins: { player2wins }</h4>
        <h4>Tie games: { tieGames }</h4>
      </div>
    );
  }
}

export default connect(
  state => ({ gameLog: state.game, record: state.record }),
  { takeTurn, clearBoard }
)(Board);