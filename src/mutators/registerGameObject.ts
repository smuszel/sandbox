type F = (state: State) => (gameObject: GameObjectData) => State;

export const registerGameObject: F = state => gameObject => {
    const go: GameObject = { ...gameObject, id: state.idCounter };

    return {
        ...state,
        inner: {
            ...state.inner,
            gos: [...state.inner.gos, go],
        },
        idCounter: state.idCounter + 1,
    };
};
