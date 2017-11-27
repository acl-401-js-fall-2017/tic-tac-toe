import * as actions from './constants';

export function addMove(move){
  return{
    type: actions.ADD_MOVE,
    payload: move
  };
}

export function addRecord(result){
  return{
    type: actions.ADD_RECCORD,
    payload: result
  };
}

export function clearBoard(){
  return{
    type: actions.CLEAR_BOARD
  };
}