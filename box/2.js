const box = x => {
    return {
        map: f => f(x),
        value: x,
    };
};

const b = box(1).map(x => x + 1);
console.log(b);
