import { GameObjectName, gameObjects } from '../metadata/gameObjects';
import { State } from '../types';

type F = (state: State) => (name: GameObjectName, n: number) => State;

export const addGameObject: F = state => (name, n) => {
    const go = gameObjects[name];
    const afterReg = go.register(state);
    return go.place(afterReg.idCounter - 1, n)(afterReg);
};
