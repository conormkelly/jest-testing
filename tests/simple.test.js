const { doesDangerousThings } = require('../main');
const myService = require('../services/myService');

// calls to jest.mock are hoisted
// so we don't need to worry about the order of imports as such
jest.mock('../services/myService', () => {
  return {
    dangerousFunction: jest
      .fn()
      .mockImplementation(
        (arg) => `This is a stubbed function acting on: ${arg}`
      ),
  };
});

describe('Demonstrating hoisting behaviour', () => {
  it('Should work', () => {
    expect(doesDangerousThings('sample')).toEqual(
      'This is a stubbed function acting on: sample'
    );
  });

  it('Should work with different args', () => {
    expect(doesDangerousThings('test')).toEqual(
      'This is a stubbed function acting on: test'
    );
  });

  it('Should be called twice', () => {
    expect(myService.dangerousFunction).toBeCalledTimes(2);
  });
});
