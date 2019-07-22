export const range = (n: number) =>
    Array(n)
        .fill(undefined)
        .map((_, ix) => ix);

const outerJoinBy = <A, B>(cb: (a: A, b: B) => boolean, xs: A[], ys: B[]) => {
    return ys.map(y => {
        return { ...y, ...xs.find(x => cb(x, y)) };
    });
};

export const outerJoin = <A, B>(xs: A[], ys: B[], keyA: keyof A, keyB: keyof B, propName: string) => {
    return xs.map(x => {
        // @ts-ignore
        const match = ys.find(y => x[keyA] === y[keyB]);
        const res = { ...x, [propName]: match || null };
        return res;
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
