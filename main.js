global.rootRequire = (str) => {
  return require(__dirname + '/' + str);
};

const myService = require('./services/myService');
const Person = require('./classes/Person');
const timerService = require('./services/timerService');
const dynamicService = rootRequire('services/dynamicService');

function doesDangerousThings(param) {
  const result = myService.dangerousFunction(param);
  console.log('RESULT:', result);
  return result;
}

function greetingsFromBob(name) {
  const bob = new Person('bob');
  return bob.greet(name);
}

async function respondAfterDelay({ ms, value }) {
  const result = await timerService.delay({ ms, input: value });
  return result;
}

function dynamicImportTest(arg) {
  return dynamicService(arg);
}

module.exports = {
  doesDangerousThings,
  greetingsFromBob,
  respondAfterDelay,
  dynamicImportTest,
};
