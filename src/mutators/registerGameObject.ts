import { GameObjectName } from '../metadata/gameObjects';
import { State, GameObject } from '../types';

type F = (name: GameObjectName) => (state: State) => State;

export const registerGameObject: F = name => state => {
    const go: GameObject = { name, id: state.idCounter, type: 'gameObject' };

    return {
        ...state,
        inner: {
            ...state.inner,
            gos: [...state.inner.gos, go],
        },
        idCounter: state.idCounter + 1,
    };
};
