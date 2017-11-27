import * as actions from './constants';

export default function Game(state = { board:[ ['a','a','a'] ,['a','a','a'], ['a','a','a'] ], turn: 'PlayerX', finished: false }, { type, payload }) {
  switch (type) {
  case actions.INITIATE_GAME:
    console.log('we are in the right case with payload of', payload);
    return Object.assign({}, state, payload);
  default:
    console.log('we shouldnt be here');
    return state; 
  }
}
