import './index.css';
import { render } from './render';
import { initState } from './state';
import { dom } from './dom';
import { gameObjects } from '../metadata/gameObjects';
import { addGameObject } from './commands/addGameObject';

document.addEventListener('click', ev => {
    // const n = Object.keys(board).find(n => board[n] === ev.target);
    // const targetTile = n && board[n];
    // const playerId = (state.entities.find(ent => ent.name === 'player') || { id: 0 }).id;
    // const playerPosition = state.positions.find(p => p.id === playerId);
    // if (n && targetTile && playerPosition && playerPosition.n !== +n) {
    //     playerPosition.n = +n;
    //     state.turns++;
    //     render();
    // }
});

const config = JSON.parse(localStorage.config || '{ "x": 55, "y": 25 }');
const state = addGameObject(initState(config))(gameObjects.player, 4);
const _dom = dom(config);

// @ts-ignore
window['state'] = state;

render(state, _dom);
