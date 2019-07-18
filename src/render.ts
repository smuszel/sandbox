import { maxByProp, outerJoin } from './util';
import { groupBy } from 'ramda';

export const render = (state: FlatState, dom: DOM) => {
    const buildItems = outerJoin((e, p) => e.id === p.entityId, state.entities, state.placements);
    const byPosition = groupBy(x => x.n.toString(), buildItems);
    debugger;

    dom.turnsCounter.innerText = state.turns.toString();

    Object.keys(byPosition).forEach(key => {
        const topItem = maxByProp('n', byPosition[key]);

        if (topItem) {
            dom.board[topItem.n].textContent = topItem.symbol || '.';
            dom.board[topItem.n].style.color = topItem.color || 'black';
        }
    });
};
