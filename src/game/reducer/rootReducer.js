import { board, player, turn } from './reducer';
import { combineReducers } from 'redux';

const ticTacToe = combineReducers({
  board,
  player,
  turn
});

export default ticTacToe;
