const { greetingsFromBob } = require('../main');

// Example of mocking a constructor
const mockGreetFunction = jest.fn();
jest.mock('../classes/Person', () => {
  return jest.fn().mockImplementation(() => {
    return {
      greet: mockGreetFunction.mockReturnValueOnce("Hi Alice, I'm Bob."),
    };
  });
});

describe('Constructor mocking', () => {
  it('Should work', () => {
    expect(greetingsFromBob('Alice')).toEqual("Hi Alice, I'm Bob.");
  });

  it('Should definitely call the mock', () => {
    expect(greetingsFromBob('Charles')).toEqual("Hi Alice, I'm Bob.");
  });
});
