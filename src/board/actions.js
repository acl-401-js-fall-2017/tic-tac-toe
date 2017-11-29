import * as actions from './constants';

const winConditons = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

export function takeTurn(position){
  return (dispatch, getState) => {

    const { turn, game } = getState();

    const gameLog = {
      player1: [],
      player2: []
    };

    const play = turn === 'player1' ? 'X' : 'O'; 
  
    game.forEach((square, index) => {
      if (square === 'X') gameLog.player1.push(index);
      if (square === 'O') gameLog.player2.push(index);
    });

    gameLog[turn].push(position);

    dispatch({
      type: actions.TAKE_TURN,
      payload: {
        position,
        play
      }     
    });

    const winDetectedPLayer1 = winConditons.map(combination => {
      const checkWin = combination.map(element => {
        return gameLog.player1.includes(element);
      });
      return checkWin.every(checkResult => {
        return checkResult === true;
      }); 
    });

    const winDetectedPLayer2 = winConditons.map(combination => {
      const checkWin = combination.map(element => {
        return gameLog.player2.includes(element);
      });
      return checkWin.every(checkResult => {
        return checkResult === true;
      }); 
    });

    
    if(winDetectedPLayer1.includes(true)) console.log('player1 won!');
    if(winDetectedPLayer2.includes(true)) console.log('player2 won!');
  };
}

export function addRecord(result){
  return{
    type: actions.ADD_RECORD,
    payload: result
  };
}

export function clearBoard(){
  return{
    type: actions.CLEAR_BOARD
  };
}