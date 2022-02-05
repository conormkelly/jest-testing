const myService = require('./services/myService');
const Person = require('./classes/Person');

function doesDangerousThings(param) {
  const result = myService.dangerousFunction(param);
  console.log('RESULT:', result);
  return result;
}

function greetingsFromBob(name) {
  const bob = new Person('bob');
  return bob.greet(name);
}

module.exports = {
  doesDangerousThings,
  greetingsFromBob,
};
