import * as actions from './constants';

export function addMove(move){
  return (dispatch, getState) => {
    const { turn } = getState();
    const play = turn === 'Player1' ? 'X' : 'O'; 

    dispatch({
      type: actions.ADD_MOVE,
      payload: {
        move, 
        play
      }     
    });

    const { game } = getState();


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