import { combineReducers } from 'redux';
import { game, turn, finished } from './reducer';

const rootReducer = combineReducers({
  game,
  turn,
  finished
});

export default rootReducer;