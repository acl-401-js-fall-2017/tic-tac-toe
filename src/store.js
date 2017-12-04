import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import ticTacToe from './game/reducer/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  ticTacToe,
  {},
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;