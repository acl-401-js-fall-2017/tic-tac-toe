import * as actions from '../constants';

const emptyBoard = [ ['','',''],
                     ['','',''],   //eslint-disable-line
                     ['','',''] ]; //eslint-disable-line


export function board(state = emptyBoard, { type, payload }) {
  let newState = [];
  switch(type) {
    case actions.MOVE:
      newState[0] = [...state[0]];
      newState[1] = [...state[1]];
      newState[2] = [...state[2]];
      newState[payload.row][payload.column] = payload.player;
      return newState;
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
        console.log('tie', state);
        return {
          X: {
            ...state.X,
            ties: state.X.ties +1
          },
          O: {
            ...state.O,
            ties: state.O.ties +1
          }
        };
      }
      else {
        loser = getOtherPlayer(payload.winner);
        console.log('win', state);
        return {
          [loser]: {
            ...state[loser],
            losses: state[loser].losses +1
          },
          [payload.winner]: {
            ...state[payload.winner],
            wins: state[payload.winner].wins +1
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