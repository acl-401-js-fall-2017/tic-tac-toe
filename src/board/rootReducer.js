import { combineReducers } from 'redux';
import { game, turn, record } from './reducer';

const rootReducer = combineReducers({
  game,
  turn,
  record
});

export default rootReducer;