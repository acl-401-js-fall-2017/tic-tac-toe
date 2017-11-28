import * as actions from './constants';

export function takeTurn(index) {
  return (dispatch, getState) => {

    const { turn } = getState();
    const token = turn === 'PlayerX' ? 'X' : 'O';

    dispatch({
      type: actions.TAKE_TURN,
      payload: { index, token }
    });

    const { board } = getState();

    if(gameWon()) {
      dispatch({
        type: actions.WIN_GAME,
        payload: turn
      });
    }
    
    if(board.filter(square => square !== 'a').length === 9) {
      dispatch({
        type: actions.TIE_GAME
      });
    }

  };
}

const gameWon = () => false;