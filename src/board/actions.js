import * as actions from './constants';

export function addMove(move){
  return{
    type: actions.ADD_MOVE,
    payload: move
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