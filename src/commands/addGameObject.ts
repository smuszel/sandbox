import { registerGameObject } from '../mutators/registerGameObject';
import { placeGameObject } from '../mutators/placeGameObject';

type F = (state: State) => (go: GameObjectData, n: number) => State;

export const addGameObject: F = state => (go, n) => {
    const afterReg = registerGameObject(state)(go);
    return placeGameObject(afterReg)(afterReg.idCounter - 1, n);
};
