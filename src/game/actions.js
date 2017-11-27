import * as actions from './constants';

export function registerPlayer(player, name){
  return dispatch => dispatch({
    type: actions.REGISTER_PLAYER,
    payload: {
      player,
      name
    }
  });
}

export function move(row, column){
  return (dispatch, getState) => {
    const state = getState();
    dispatch({
      type: actions.MOVE,
      payload: {
        player: state.turn.current,
        row,
        column
      }
    });
  };
}