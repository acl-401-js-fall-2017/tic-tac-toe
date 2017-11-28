import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import game from './board/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = store => next => action => {
  console.log('before action', action);
  return next(action);
};

const store = createStore(
  game,
  composeEnhancers(
    applyMiddleware(logger, thunk)
  )
);

store.subscribe(()=> console.log('store updated to: ', store.getState()));

export default store;