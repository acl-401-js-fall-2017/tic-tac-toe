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

    function winDetector(array){ 
      const checkAllCombinations = winConditons.map(combination => {
        const checkWin = combination.map(element => {
          return array.includes(element);
        });
        return checkWin.every(checkResult => {
          return checkResult === true;
        }); 
      });
      return checkAllCombinations.includes(true);
    }

    function catsDetector(){
      const count = gameLog.player1.length + gameLog.player2.length;
      const catsGame = count === 9;
      return catsGame;
    }

    if(winDetector(gameLog.player1)) {
      dispatch({
        type: actions.ADD_RECORD,
        payload: 'player1'
      });

      
      dispatch({
        type: actions.CLEAR_BOARD,
      });
      
    }
    
    if(winDetector(gameLog.player2)) {
      dispatch({
        type: actions.ADD_RECORD,
        payload: 'player2'
      });
      dispatch({
        type: actions.CLEAR_BOARD,
      }); 
    }

    if(catsDetector(gameLog)) {
      dispatch({
        type: actions.ADD_RECORD,
        payload: 'TIE'
      });

      dispatch({
        type: actions.CLEAR_BOARD,
      });
    }
  };
}

export function clearBoard(){
  return{
    type: actions.CLEAR_BOARD
  };
}