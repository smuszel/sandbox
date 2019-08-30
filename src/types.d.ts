import { GameObjectName } from './metadata/gameObjects';

export type GameObject = {
    type: 'gameObject';
    name: GameObjectName;
    id: number;
};

export type Placement = {
    type: 'placement';
    id: number;
    gameObjectId: number;
    n: number;
};

export type Entity = GameObject | Placement;

export type State = {
    board: {
        range: number[];
        x: number;
        y: number;
    };
    inner: {
        gos: GameObject[];
        placements: Placement[];
    };
    turns: number;
    idCounter: number;
};

export type Config = {
    x: number;
    y: number;
    randomBufferSize: number;
    seedString: string;
};
