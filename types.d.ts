declare type DOM = typeof import('./src/dom').dom;

declare type ElementOf<T> = T extends (infer X)[] ? X : never;
declare type EntityData = ElementOf<typeof import('./data/entities').entities>;
declare interface EntityId extends Number {}
declare interface PlacementId extends Number {}
declare type Entity = EntityData & { id: EntityId };
declare type EntityType = keyof typeof import('./data/entities').entitiesMap;
declare type Placement = { id: PlacementId; n: number; entityId: EntityId };

declare type FlatState = {
    boardRange: number[];
    entities: Entity[];
    turns: number;
    placements: Placement[];
};
