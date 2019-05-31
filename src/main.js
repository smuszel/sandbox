module.exports = text => {
    return (text || '').split(' ').reduce((acc, x) => acc + +x, 0);
};
