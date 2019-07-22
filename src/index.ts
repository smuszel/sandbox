import './index.css';
import { render } from './render';
import { initState } from './state';
import { dom } from './dom';
import { registerGameObject } from './mutators/registerGameObject';
import { gameObjects } from '../metadata/gameObjects';
import { placeGameObject } from './mutators/placeGameObject';

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

type F = (state: State) => (go: GameObjectData, n: number) => State;

const addGameObject: F = state => (go, n) => {
    const afterReg = registerGameObject(state)(go);
    return placeGameObject(afterReg)(afterReg.idCounter - 1, n);
};

const state = addGameObject(initState(3))(gameObjects.player, 4);

// const state = placeGameObject(registerGameObject(initState(3))(gameObjects.player))(1, 4);

render(state, dom);
