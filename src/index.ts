import './index.css';
import { render } from './render';
import { initState } from './state';
import { dom } from './dom';
import { gameObjects } from '../metadata/gameObjects';
import { addGameObject } from './commands/addGameObject';
import { placeGameObject } from './mutators/placeGameObject';
import { flushTiles } from './macros/flushTiles';

const defaultConfig: Config = { x: 55, y: 25, randomBufferSize: 1000, seedString: 'abbac' };
const config = JSON.parse(localStorage.config || JSON.stringify(defaultConfig));
let state = flushTiles(addGameObject(initState(config))(gameObjects.player, 200));
const _dom = dom(config);

document.addEventListener('click', ev => {
    const board = _dom.board;
    const n = Object.keys(board).find(n => _dom.board[+n] === ev.target);
    const targetTile = n && board[+n];
    const playerId = (state.inner.gos.find(go => go.name === 'player') || { id: 0 }).id;

    if (playerId && n) {
        state = placeGameObject(state)(playerId, +n);
        render(state, _dom);
    }
});
// @ts-ignore
window['state'] = () => state;

render(state, _dom);
