export const placeEntity = (state: FlatState) => (entity: Entity, n: number) => {
    const oldPlacement = state.placements.find(p => p.entityId === entity.id);
};
