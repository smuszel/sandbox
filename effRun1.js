const effRun = (mod, currentValue = null, isStopped = false) => {
    if (isStopped) {
        const id = () => effRun(mod, currentValue, isStopped);
        return {
            map: id,
            effect: id,
            maybe: id,
            currentValue,
        };
    } else {
        return {
            map: f => effRun(mod, f(mod)(currentValue)),
            effect: f => {
                f(mod)(currentValue);
                return effRun(mod, currentValue);
            },
            maybe: f => {
                const res = f(mod)(currentValue);
                const isStopped = res === undefined;
                return effRun(mod, currentValue, isStopped);
            },
            currentValue,
        };
    }
};

const eff = effRun({ a: 1 })
    .effect(mod => val => console.log(mod, val))
    .map(mod => val => mod.a)
    .map(mod => val => val + 1);

console.log(eff);
