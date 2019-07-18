// import { outerJoin, range, maxByProp } from './util';
import './index.css';
// import groupBy from 'ramda/es/groupBy';
import { render } from './render';
import state from './state';
import { dom } from './dom';

// const render = () => {
//     state.entities = [...state.entities, ...rn.map((_, ix) => ({ id: 3 + ix, ...entities[2] }))];
//     state.positions = [...state.positions, ...rn.map((_, ix) => ({ id: 3 + ix, n: ix }))];

// };

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

render(state, dom);
