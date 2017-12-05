import * as actions from './constants';

const newGameBoard = () => [
  '', '', '',
  '', '', '',
  '', '', ''
];

export function game(state = newGameBoard(), { type, payload }) {
  switch(type) {
    case actions.TAKE_TURN: {
      const { position, play } = payload;
      return state.map((square, i) => i === position ? play : square);
    }
    case actions.CLEAR_BOARD:{
      return newGameBoard();
    }
    default:
      return state;
  }
}

export function turn(state = 'player1', { type, payload }) {
  switch(type) {
    case actions.TAKE_TURN: {
      return state === 'player1' ? 'player2' : 'player1';
    }
    default:
      return state;
  }
}

export function record(state = [], { type, payload }) {
  switch(type) {
    case actions.ADD_RECORD:
      return [ ...state, payload];
    case actions.CAT_GAME: 
      return true; //todo: more game logic
    default:
      return state;
  }
}
