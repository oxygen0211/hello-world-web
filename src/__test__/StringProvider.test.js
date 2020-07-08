const StringProvider = require('../StringProvider');

describe('String provider tests', () => {
  it('greets with Hello World', () => {
    expect(StringProvider.getHelloWorld()).toEqual('Good bye, World');
  })
});
