# tic-tac-toe

Build a tic-tac-toe using `react`, `redux`, and `redux-thunk`

## Game Play

Allow players to take turns, either placing an X or an O (X goes first).

Identify wins and ties, and track each players wins accordingly.

## Bonus

* Allow players to change their display names
* Switch who goes first according to the following rules
  * After a win, the player that won goes first on the next game
  * After a tie game, switch the player that went first
  
## Rubric

* Overall game functions correctly *2pts*
* Set up `store` and integrate via `<Provider>` *1pt*
* Reducers *3pts*
* Action Creators *3pts*
* `connect` Components *1pt*

## Reference

In order to complete the tic-tac-toe game, you will need to code action creators that have access to the rest of the store. 

### Configure Redux

In order to enable this functionality, you need to `> npm i redux-thunk` and change your store setup as follows:

```js
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// import your particular reducers...
import { board, players } from './game/reducer';
// combine step is the same...
const rootReducer = combineReducers({
  board,
  players
});

// this enables REDUX devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store
const store = createStore(
  rootReducer,
  {}, 
  // this is the new piece here!!!
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;
```

### Return Function from Action Creator

The way we invert control in the action creator is to return a function, instead of an object. This function will then be 
"called back" with `dispatch` and `getState` arguments:

```js
export function takeTurn(index) {
  return (dispatch, getState) => {
    // get the current state by calling "getState":
    const state = getState();
    
    // apply game logic, or look up other values you need
    // from store in order to dispatch actions

    // instead of returning an action, pass it directly to dispatch
    dispatch({
      type: SOME_ACTION,
      payload: /*...*/
    });
    
    // you can retrieve the "new" state if needed after dispatching an action:
    const newState = getState();

    // you can dispatch more than one action if needed:
    dispatch({
      type: SOME_OTHER_ACTION
    });

  };
}
```

