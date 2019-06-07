const extract = (log, proc) => {
    return log(proc.argv.slice(2)[0]);
};

extract(console.log, process);
