import { range } from './util';
import { Config } from './types';

export const dom = (config: Config) => {
    document.body.style.setProperty('--x', config.x.toString());
    document.body.style.setProperty('--y', config.y.toString());
    const board = range(config.x * config.y).map(() => {
        const tile = document.createElement('div');
        document.body.appendChild(tile);

        return tile;
    });

    const turnsCounter = document.createElement('span');
    document.body.appendChild(turnsCounter);

    return {
        turnsCounter,
        board,
    };
};
