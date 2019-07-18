export const entitiesMap = <const>{
    player: {
        name: 'player',
        symbol: '@',
        color: 'white',
        precedence: 10,
    },
    gold: {
        name: 'gold',
        symbol: '$',
        color: 'yellow',
        precedence: 5,
    },
    tile: {
        name: 'tile',
        symbol: '.',
        color: 'gray',
        precedence: 0,
    },
};

export const entities = Object.values(entitiesMap);
