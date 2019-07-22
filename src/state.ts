import { range } from './util';
// import { entitiesMap } from '../metadata/entities';

export const initState: (edge: number) => State = edge => ({
    board: {
        range: range(edge ** 2),
        edge: edge,
    },
    inner: {
        gos: [],
        placements: [],
    },
    turns: 0,
    idCounter: 1,
});
