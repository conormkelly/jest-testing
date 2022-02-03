// Mock functions that do undesired things
jest.mock('./services/myService');
const myServiceMock = require('./services/myService');

myServiceMock.dangerousFunction = (arg) => {
  return `This is a stubbed function acting on: ${arg}`;
};

// Import code under test
const main = require('./main');

test('stub works as expected', () => {
  expect(main.doesDangerousThings('sample')).toBe(
    `This is a stubbed function acting on: sample`
  );
});
