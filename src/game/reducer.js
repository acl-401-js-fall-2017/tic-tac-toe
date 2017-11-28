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

export function finished(state = false, { type, payload }) {
  switch(type) {
  case actions.WIN_GAME:
  case actions.TIE_GAME:
    return true;
  default:
    return state;
  }
}
