export const range = (n: number) =>
    Array(n)
        .fill(undefined)
        .map((_, ix) => ix);

export const outerJoin = <T, H>(cb: (a: T, b: H) => boolean, xs: T[], ys: H[]) => {
    return ys.map(y => {
        return { ...y, ...xs.find(x => cb(x, y)) };
    });
};
