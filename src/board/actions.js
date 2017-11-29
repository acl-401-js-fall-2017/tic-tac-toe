import * as actions from './constants';

export function takeTurn(position){
  return (dispatch, getState) => {
    const { turn } = getState();
    const play = turn === 'Player1' ? 'X' : 'O'; 

    dispatch({
      type: actions.TAKE_TURN,
      payload: {
        position,
        play
      }     
    });
    //Add win and lose conditions
    //const { game } = getState();
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