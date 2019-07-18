export const range = (n: number) =>
    Array(n)
        .fill(undefined)
        .map((_, ix) => ix);

export const outerJoin = <T, H>(cb: (a: T, b: H) => boolean, xs: T[], ys: H[]) => {
    return ys.map(y => {
        return { ...y, ...xs.find(x => cb(x, y)) };
    });
};

export const maxByProp = <T, K extends keyof T>(prop: K, xs: T[]): T | null => {
    return xs.reduce((acc: T | null, x) => {
        const accN = acc && acc[prop];
        const xN = x && x[prop];

        if (typeof accN === 'number' && typeof xN === 'number' && accN < xN) {
            return x;
        } else if (acc === null) {
            return x;
        } else {
            return acc;
        }
    }, null);
};
