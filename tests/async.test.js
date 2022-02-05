const { respondAfterDelay } = require('../main');
const timerService = require('../services/timerService');

jest.mock('../services/timerService');
timerService.delay.mockResolvedValue('123');

describe('Demonstrating async behaviour', () => {
  it('Should work', async () => {
    const result = await respondAfterDelay({ ms: 1000, value: '123' });
    expect(result).toEqual('123');
  });

  it('Should only be called once', () => {
    expect(timerService.delay).toBeCalledTimes(1);
  });
});
