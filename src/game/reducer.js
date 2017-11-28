import * as actions from './constants';

const getEmptyBoard = () => {
  return [
    '','','',
    '','','',
    '','',''
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

export function finished(state = '', { type, payload }) {
  switch(type) {
  case actions.WIN_GAME: {
    console.log('we are hitting reducer win game');
    return payload;
  }
  case actions.TIE_GAME:
    console.log('we are hitting a tie in reducer');
    return 'Tie';
  default:
    return state;
  }
}