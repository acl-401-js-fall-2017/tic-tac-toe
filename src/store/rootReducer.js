import { combineReducers } from 'redux';
import { board, turn, finished } from '../game/reducer';

const rootReducer =  combineReducers({ board, finished, turn });

export default rootReducer;