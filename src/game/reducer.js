import * as actions from './constants';

export default function Game(state = [], { type, payload }) {
  switch (type) {
  case actions.INITIATE_GAME:
    console.log('we are in the right case with payload of', payload);
    return [
      ...state,
      payload
    ];
  default:
    console.log('we shouldnt be here');
    return state; 
  }
}
