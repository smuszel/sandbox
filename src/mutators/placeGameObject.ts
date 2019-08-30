import { State, Placement } from '../types';

type F = (gameObjectId: number, n: number) => (state: State) => State;

export const placeGameObject: F = (gameObjectId, n) => state => {
    const placement: Placement = { type: 'placement', id: state.idCounter, gameObjectId, n };
    const differentPlacement = (p: Placement) => p.gameObjectId !== gameObjectId;
    const otherPlacements = state.inner.placements.filter(differentPlacement);

    return {
        ...state,
        inner: {
            ...state.inner,
            placements: [...otherPlacements, placement],
        },
        idCounter: state.idCounter + 1,
    };
};
