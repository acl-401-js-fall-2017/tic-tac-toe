import * as actions from './constants';

export function initGame(game){
  console.log('we are in initGame and game is', game);
  return {
    type: actions.INITIATE_GAME,
    payload: game
  };
}