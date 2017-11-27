import * as actions from '../constants';

const emptyBoard = [ ['','',''],
                     ['','',''],   //eslint-disable-line
                     ['','',''] ]; //eslint-disable-line


export function board(state = emptyBoard, { type, payload }) {
  let modRow = null;
  switch(type) {
    case actions.MOVE:
      modRow = state.slice(payload.row, payload.row+1);
      return [
        ...state.slice(0, payload.row),
        ...modRow.slice(0, payload.column).concat(
          payload.player,
          modRow.slice(payload.column)
        ),
        ...state.slice(payload.row)
      ];
    case actions.GAME_WON:
      return emptyBoard;
    default:
      return state;
  }
}


const newPlayers = {
  X: {
    name: 'playerX',
    wins: 0,
    losses: 0,
    ties: 0
  },
  O: {
    name: 'playerO',
    wins: 0,
    losses: 0,
    ties: 0
  }
};

const getOtherPlayer = thisPlayer => thisPlayer === 'X' ? 'O' : 'X';

export function player(state = newPlayers, { type, payload }) {
  let loser = null;
  
  switch(type) {
    case actions.REGISTER_PLAYER:
      return {
        ...state,
        [payload.player]: {
          ...state[payload.player],
          name: payload.name
        } 
      };
    case actions.GAME_WON:
      if(payload.winner === null) {
        return {
          X: {
            ...state.X,
            ties: state.X.ties++
          },
          O: {
            ...state.O,
            ties: state.O.ties++
          }
        };
      }
      else {
        loser = getOtherPlayer(payload.winner);
        return {
          [loser]: {
            ...state[loser],
            losses: state[loser].losses++
          },
          [payload.winner]: {
            ...state[payload.winner],
            wins: state[payload.winner].wins++
          } 
        };
      }
    default:
      return state;
  }
}

const initTurn = {
  current: 'X',
  first: 'X'
};

export function turn(state = initTurn, { type, payload }) {
  let nextFirstMove = null;
 
  switch(type) {
    case actions.MOVE:
      return {
        ...state,
        current: getOtherPlayer(payload.player)
      };
    case actions.GAME_WON:
      nextFirstMove = payload.winner ? payload.winner : getOtherPlayer(payload.winner);
      return {
        first: nextFirstMove,
        current: nextFirstMove
      };
    default:
      return state;
  }
}