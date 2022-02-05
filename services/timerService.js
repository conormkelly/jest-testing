module.exports = {
  delay: ({ ms, input }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(input);
      }, ms);
    });
  },
};
