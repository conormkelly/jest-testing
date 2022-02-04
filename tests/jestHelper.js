module.exports = {
  mock: (modulePath, replace = {}) => {
    const mockWithReplacements = jest.fn();
    for (const key in replace) {
      mockWithReplacements[key] = replace[key];
    }
    jest.mock(modulePath, () => mockWithReplacements);
    return mockWithReplacements;
  },
};
