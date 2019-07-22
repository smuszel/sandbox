import { range } from './util';
import { getRandGen } from './random';

export const initState: (config: Config) => State = config => {
    const rand = getRandGen(config.seedString);
    const randomDistrib = Array(config.randomBufferSize)
        .fill(undefined)
        .map(rand);

    return {
        board: {
            range: range(config.x * config.y),
            x: config.x,
            y: config.y,
        },
        inner: {
            gos: [],
            placements: [],
        },
        turns: 0,
        idCounter: 1,
        randPointer: 0,
        randomDistrib,
    };
};
