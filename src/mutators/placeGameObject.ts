type F = (state: State) => (goId: number, n: number) => State;

export const placeGameObject: F = state => (goId, n) => {
    const placement: Placement = { id: state.idCounter, goId: goId, n };
    const differentPlacement = (p: Placement) => p.goId !== goId;
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
