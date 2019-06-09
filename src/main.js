module.exports = ({ process, console }) => {
    const str = process.argv.slice(2)[0] || '';
    const sum = str
        .replace(/\n/g, ',')
        .split(',')
        .reduce((acc, x) => acc + +x, 0);

    console.log(sum);
};
