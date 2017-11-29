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

export function turn(state = 'Player1', { type, payload }) {
  switch(type) {
    case actions.TAKE_TURN: {
      return state === 'Player1' ? 'Player2' : 'Player1';
    }
    default:
      return state;
  }
}

export function finished(state = false, { type, payload }) {
  switch(type) {
    case actions.WIN_GAME:
    case actions.CAT_GAME: 
      return true; //todo: more game logic
    default:
      return state;
  }
}
