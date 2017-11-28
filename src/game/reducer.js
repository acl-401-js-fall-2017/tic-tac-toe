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

const getEmptyBoard = () => {
  return [
    'a','a','a',
    'a','a','a',
    'a','a','a'
  ];
};

export function board(state = getEmptyBoard(), { type, payload }) {
  switch (type) {
  case actions.TAKE_TURN: {
    const { index, token } = payload;
    return state.map((square, i) => i === index ? token : square);
  }
  default:
    return state;
  }
}

export function turn(state = 'PlayerX', { type, payload }) {
  switch(type) {
  case actions.TAKE_TURN: {
    return state === 'PlayerX' ? 'PlayerO' : 'PlayerX';
  }
  default:
    return state;
  }
}

export function finished(state = false, { type, payload }) {
  switch(type) {
  case actions.WIN_GAME:
  case actions.TIE_GAME:
    return true;
  default:
    return state;
  }
}
