import { createStore } from 'redux';
import game from './board/reducer';

const store = createStore(game);

store.subscribe(()=> console.log('store updated to: ', store.getState()));

export default store;