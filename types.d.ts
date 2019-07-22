declare type DOM = typeof import('./src/dom').dom;
declare type cy = typeof import('cypress');

declare type GameObjectData = {
    name: string;
    symbol: string;
    color: string;
    precedence: number;
};

declare type GameObject = GameObjectData & {
    id: number;
};

declare type Placement = {
    id: number;
    goId: number;
    n: number;
};

declare type Entity = GameObject | Placement;

declare type State = {
    board: {
        range: number[];
        edge: number;
    };
    inner: {
        gos: GameObject[];
        placements: Placement[];
    };
    turns: number;
    idCounter: number;
};
