import { createStore } from 'redux';
import game from './board/reducer';

const store = createStore(game);

export default store;