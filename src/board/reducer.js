import * as actions from './constants';

const initialState = {
  moves:[
    '_', '_', '_',
    '_', '_', '_',
    '_', '_', '_'
  ],
  record:[]
};

export default function game(state = initialState, { type, payload }) {
  switch (type) {
    case actions.ADD_MOVE:
      return{
        ...state,
        moves: [ ...state.moves, payload]
      };
    case actions.ADD_RECORD:
      return{
        ...state,
        record: [...state.record, payload]
      };
    case actions.CLEAR_BOARD:
      return{
        ...state,
        moves: []
      };
    default:
      return state;
  }
}