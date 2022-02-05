const { doesDangerousThings } = require('../main');
const myService = require('../services/myService');

// calls to jest.mock are hoisted
// so we don't need to worry about the order of imports as such
jest.mock('../services/myService', () => {
  return {
    dangerousFunction: jest
      .fn()
      .mockReturnValueOnce('This is a stubbed function acting on: sample'),
  };
});

describe('Demonstrating hoisting behaviour', () => {
  it('Should work', () => {
    expect(doesDangerousThings('sample')).toBe(
      'This is a stubbed function acting on: sample'
    );
  });

  it('Should only be called once', () => {
    expect(myService.dangerousFunction).toBeCalledTimes(1);
  });
});
