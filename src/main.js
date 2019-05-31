module.exports = text => {
    return (text || '')
        .replace(/,/g, ' ')
        .split(' ')
        .reduce((acc, x) => acc + +x, 0);
};
