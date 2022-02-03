module.exports = {
  mock: ({ modulePath, replace }) => {
    jest.mock(modulePath);
    const mockedModule = require(modulePath);
    for (const key in replace) {
      mockedModule[key] = replace[key];
    }
  },
};
