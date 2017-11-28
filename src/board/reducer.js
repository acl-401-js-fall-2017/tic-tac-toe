import * as actions from './constants';

const newGameBoard = () => [
  '_', '_', '_',
  '_', '_', '_',
  '_', '_', '_'
];
const initialState = {
  moves: newGameBoard(),
  record:[]
};

export function game(state = newGameBoard(), { type, payload }) {
  switch(type) {
    case actions.ADD_MOVE: {
      const { index, play } = payload;
      return state.map((square, i) => i === index ? play : square);
    }
    default:
      return state;
  }
}

export function turn(state = 'Player1', { type, payload }) {
  switch(type) {
    case actions.ADD_MOVE: {
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

// export default function game(state = initialState, { type, payload }) {
//   switch (type) {
//     case actions.ADD_MOVE:
//       return{
//         ...state,
//         moves: [ ...state.moves, payload]
//       };
//     case actions.ADD_RECORD:
//       return{
//         ...state,
//         record: [...state.record, payload]
//       };
//     case actions.CLEAR_BOARD:
//       return{
//         ...state,
//         moves: newGameBoard()
//       };
//     default:
//       return state;
//   }
// }