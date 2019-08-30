import { registerGameObject } from '../mutators/registerGameObject';
import { placeGameObject } from '../mutators/placeGameObject';

const gameObjectStatic = <const>{
    player: [
        {
            symbol: '@',
            color: 'white',
            precedence: 10,
        },
    ],
    gold: [
        {
            symbol: '$',
            color: 'yellow',
            precedence: 5,
        },
    ],
    tile: [
        {
            symbol: '.',
            color: 'gray',
            precedence: 0,
        },
    ],
};

export type GameObjectName = keyof typeof gameObjectStatic;

type GameObjectBuild = {
    name: GameObjectName;
    symbol: string;
    color: string;
    precedence: number;
    register: ReturnType<typeof registerGameObject>;
    place: typeof placeGameObject;
};

const keys = Object.keys as <T>(o: T) => (Extract<keyof T, string>)[];

export const gameObjects = Object.fromEntries(
    keys(gameObjectStatic).map(name => {
        const [stat] = gameObjectStatic[name];
        const buildGameObject = { ...stat, place: placeGameObject, register: registerGameObject(name), name };
        return [name, buildGameObject];
    }),
) as Record<GameObjectName, GameObjectBuild>;
