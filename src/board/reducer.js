import default from "../App";


const initialState = {
  moves:[],
  turn: 'P1',
  record:[]
};



export default function game(state = initialState, { type, payload }) {
  switch (type) {
    case 'ADD_MOVE':
      return{
        ...state,
        moves: [ ...state.moves, payload]
          }
      default:
        return state;
  }
}