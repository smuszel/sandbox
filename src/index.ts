import { entities } from './entities';
import { outerJoin, range } from './util';
import './index.css';

const state = {
    edge: 3,
    entities: [{ ...entities[0], id: 1 }, { ...entities[1], id: 2 }],
    positions: [
        {
            id: 1,
            n: 4,
        },
        {
            id: 2,
            n: 0,
        },
    ],
};

const render = () => {
    const rn = range(state.edge ** 2);
    state.entities = [...state.entities, ...rn.map((_, ix) => ({ id: 3 + ix, ...entities[2] }))];
    state.positions = [...state.positions, ...rn.map((_, ix) => ({ id: 3 + ix, n: ix }))];
    const buildItems = outerJoin((e, p) => e.id === p.id, state.entities, state.positions);
    debugger;
    const board = Object.fromEntries(
        rn.map(n => {
            const tile = document.createElement('div');
            document.body.appendChild(tile);

            return [n, tile];
        }),
    );

    buildItems.forEach(item => {
        board[item.n].textContent = item.symbol || '.';
        board[item.n].style.color = item.color || 'black';
    });
};

render();
