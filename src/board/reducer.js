import * as actions from './constants';

const initialState = {
  moves:[],
  record:[]
};

export default function game(state = initialState, { type, payload }) {
  switch (type) {
    case actions.ADD_MOVE:
      console.log('changing store');
      return{
        ...state,
        moves: [ ...state.moves, payload]
      };
    case actions.ADD_RECCORD:
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