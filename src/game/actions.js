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
    const gameState = checkGameOver(state.board, { r: row, c: column }, state.turn.current);
    if(gameState === 'win') {
      dispatch({
        type: actions.GAME_WON,
        payload: {
          winner: state.turn.current
        }
      });
    }
    else if(gameState === 'tie') {
      dispatch({
        type: actions.GAME_WON,
        payload: {
          winner: null
        }
      })
    }
    else {
      dispatch({
        type: actions.MOVE,
        payload: {
          player: state.turn.current,
          row,
          column
        }
      });
    }
  };
}

const checkLine = (array, player) => array.every(tile => tile === player);

const checkRow = (board, player) => r => {
  return checkLine(board[r], player);
};

const checkCol = (board, player) => c => {
  let column = [];
  for(let i = 0; i < board.length; i++) {
    column.push(board[i][c]);
  }
  return checkLine(column, player);
};

const checkRowsAndColumns = (board, player) => {

  const winningR = checkRow(board, player);
  const winningC = checkCol(board, player);

  return !board.every((eachSlice, i) => (!winningR(i) && !winningC(i)));
};

const checkDiagonals = (board, player) => {
  const backDiagonal = [];
  const forwardDiagonal = [];
  for(let i = 0; i < board.length; i++) {
    backDiagonal.push(board[i][i]);
    forwardDiagonal.push(board[i][2 - i]);
  }
  return checkLine(backDiagonal, player) || checkLine(forwardDiagonal, player);
};


function checkGameOver(board, thisMove, player) {
  const newBoard = [];
  newBoard[0] = [ ...board[0] ];
  newBoard[1] = [ ...board[1] ];
  newBoard[2] = [ ...board[2] ];
  newBoard[thisMove.r][thisMove.c] = player;

  const win = checkRowsAndColumns(newBoard, player) ||
  checkDiagonals(newBoard, player);
  
  const tie = newBoard.every(row => row.every(tile => tile));

  if(win) return 'win';
  if(tie) return 'tie';
  
}