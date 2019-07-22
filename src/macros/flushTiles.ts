import { addGameObject } from '../commands/addGameObject';
import { gameObjects } from '../../metadata/gameObjects';

type F = (state: State) => State;

export const flushTiles: F = state => {
    return state.board.range.reduce((acc, n) => {
        return addGameObject(acc)(gameObjects.tile, n);
    }, state);
};
