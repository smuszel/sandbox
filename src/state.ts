import { range } from './util';

export const initState: (config: Config) => State = config => ({
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
});
