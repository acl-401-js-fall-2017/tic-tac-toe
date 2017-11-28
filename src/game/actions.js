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

    if(gameWon(board)) {
      dispatch({
        type: actions.WIN_GAME,
        payload: turn
      });
    }
    
    if(board.filter(square => square !== '').length === 9) {
      dispatch({
        type: actions.TIE_GAME
      });
    }

  };
}

const gameWon = (board) => {
  switch(true) {
  case board[0] === board[1] && board[0] === board[2]:
    console.log('first row win');
  case board[0] && board[0] === board[3] && board[0] === board[6]:
  case board[3] && board[3] === board[4] && board[3] === board[5]:
  case board[1] && board[1] === board[4] && board[1] === board[7]:
  case board[6] && board[6] === board[7] && board[6] === board[8]:
  case board[2] && board[2] === board[5] && board[2] === board[8]:
  case board[0] && board[0] === board[4] && board[0] === board[8]:
  case board[2] && board[2] === board[4] && board[2] === board[6]:
    return true;
  default: {
    return false;
  }
  }
};