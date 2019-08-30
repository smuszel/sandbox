import { maxByProp, build } from './util';
import { groupBy } from 'ramda';
import { State } from './types';
import { gameObjects } from './metadata/gameObjects';

export const render = (state: State, dom: DOM) => {
    const buildItems = build(state.inner.gos, state.inner.placements, gameObjects);
    const byPosition = groupBy(x => (x.placement ? x.placement.n.toString() : 'none'), buildItems);

    dom.turnsCounter.innerText = state.turns.toString();

    Object.keys(byPosition).forEach(key => {
        const topItem = maxByProp('precedence', byPosition[key]);

        if (topItem && topItem.placement) {
            const n = topItem.placement.n;

            dom.board[n].textContent = topItem.symbol;
            dom.board[n].style.color = topItem.color;
        }
    });
};
