const id = x => x;
const stop = Symbol('stop');

module.exports = (mod, func = id) => {
    return {
        map: g => {
            const f = x => {
                const res = func(x);
                return res === stop ? stop : g(mod)(res);
            };
            return module.exports(mod, f);
        },
        effect: g => {
            const f = x => {
                const res = func(x);
                res !== stop && g(mod)(res);
                return res === stop ? stop : res;
            };
            return module.exports(mod, f);
        },
        maybe: g => {
            const f = x => {
                const res = func(x);
                const res2 = g(mod)(res);
                return res2 === undefined ? stop : res2;
            };
            return module.exports(mod, f);
        },
        currentValue: func,
        exec: () => {
            const res = func();
            return res === stop ? undefined : res;
        },
    };
};

// const eff = effRun({ process, console })
//     .map(({ process }) => () => process.argv.slice(2)[0])
//     .effect(({ console }) => val => console.log('argv2: ' + val))
//     .maybe(() => val => (val ? val : undefined))
//     .map(() => val => +val + 1)
//     .exec();

// console.log(eff);
