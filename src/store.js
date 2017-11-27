import { createStore } from 'redux';
import game from './game/reducer';

const store = createStore(game);

export default store;
