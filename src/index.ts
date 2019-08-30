import './index.css';
import { render } from './render';
import { initState } from './state';
import { dom } from './dom';
import { addGameObject } from './commands/addGameObject';
import { placeGameObject } from './mutators/placeGameObject';
import { flushTiles } from './macros/flushTiles';
import { Config } from './types';

const defaultConfig: Config = { x: 55, y: 25, randomBufferSize: 1000, seedString: 'abbac' };
const config: Config = JSON.parse(localStorage.config || JSON.stringify(defaultConfig));
let state = initState(config);
state = addGameObject(state)('player', 6);
state = flushTiles(state);
const _dom = dom(config);

document.addEventListener('click', ev => {
    const board = _dom.board;
    const n = Object.keys(board).find(n => _dom.board[+n] === ev.target);
    // const targetTile = n && board[+n];
    const playerId = (state.inner.gos.find(go => go.name === 'player') || { id: 0 }).id;

    if (playerId && n) {
        state = placeGameObject(playerId, +n)(state);
        render(state, _dom);
    }
});
// @ts-ignore
window['state'] = () => state;

render(state, _dom);
