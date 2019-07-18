import config from '../data/config.json';
import { range } from './util';

const board = (() =>
    range(config.edge).map(() => {
        const tile = document.createElement('div');
        document.body.appendChild(tile);

        return tile;
    }))();

const turnsCounter = (() => {
    const counter = document.createElement('span');
    document.body.appendChild(counter);

    return counter;
})();

export const dom = {
    turnsCounter,
    board,
};
