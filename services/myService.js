console.log('Imported function somewhere else?');

module.exports = {
  dangerousFunction: (arg) => {
    return `DANGEROUS OP: ${arg}`;
  },
};
