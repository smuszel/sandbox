const size = 3;

const range = n =>
    Array(n)
        .fill()
        .map((_, ix) => ix);

const outerJoin = (cb, xs, ys) => {
    return ys.map(y => {
        return { ...y, ...xs.find(x => cb(x, y)) };
    });
};

const board = Object.fromEntries(
    range(size * size).map(n => {
        const tile = document.createElement('div');
        document.body.appendChild(tile);

        return [n, tile];
    }),
);

const entities = [
    {
        id: 1,
        type: 'player',
    },
    {
        id: 2,
        type: 'gold',
    },
];

const positions = [
    {
        id: 1,
        n: 4,
    },
    {
        id: 2,
        n: 0,
    },
];

const renderers = {
    gold: () => '$',
    player: () => '@',
};

const render = () => {
    const buildItems = outerJoin((e, p) => e.id === p.id, entities, positions);

    buildItems.forEach(item => {
        board[item.n].textContent = renderers[item.type]();
    });
};

render();
