import { maxByProp, outerJoin } from './util';
import { groupBy } from 'ramda';

export const render = (state: State, dom: DOM) => {
    const buildItems = outerJoin(state.inner.gos, state.inner.placements, 'id', 'goId', 'placement');
    const byPosition = groupBy(x => (x.placement ? x.placement.n.toString() : 'none'), buildItems);

    dom.turnsCounter.innerText = state.turns.toString();

    Object.keys(byPosition).forEach(key => {
        const topItem = maxByProp('n', byPosition[key]);

        if (topItem && topItem.placement) {
            const n = topItem.placement.n;

            dom.board[n].textContent = topItem.symbol || '.';
            dom.board[n].style.color = topItem.color || 'black';
        }
    });
};
