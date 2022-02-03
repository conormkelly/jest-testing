const proxyquire = require('proxyquire').noCallThru();

// Stub functions that do undesired things
const myServiceStub = {};

const main = proxyquire('./main', {
  './services/myService': myServiceStub,
});

myServiceStub.dangerousFunction = (arg) => {
  return `This is a stubbed function acting on: ${arg}`;
};

test('stub works as expected', () => {
  expect(main.doesDangerousThings('sample')).toBe(
    `This is a stubbed function acting on: sample`
  );
});
