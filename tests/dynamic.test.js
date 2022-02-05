const { dynamicImportTest } = require('../main');
const dynamicService = require('../services/dynamicService');

// calls to jest.mock are hoisted
// so we don't need to worry about the order of imports as such
jest.mock('../services/dynamicService', () => {
  return jest.fn().mockReturnValue('dummy');
});

describe('Checking if dynamicService is correctly mocked', () => {
  it('Should work', () => {
    expect(dynamicImportTest('1')).toEqual('dummy');
  });

  it('Should be called once', () => {
    expect(dynamicService).toBeCalledTimes(1);
  });
});
