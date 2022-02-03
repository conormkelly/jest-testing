const myService = require('./services/myService');

function doesDangerousThings(param) {
  const result = myService.dangerousFunction(param);
  console.log('RESULT:', result);
  return result;
}

module.exports = {
  doesDangerousThings,
};
