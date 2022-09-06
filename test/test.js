const assert = require('chai').assert;
const multiply = require('../multiply');

describe('Multiplication', () => {
  it('1*1=1', () => {
    assert.equal(multiply(1, 1), 1);
  })
  it('2*2=4', () => {
    assert.equal(multiply(2, 2), 4);
  });
  it('3*6=18', () => {
    assert.equal(multiply(3, 6), 18);
  });
  it('12*2=12', () => {
    assert.equal(multiply(12, 2), 24);
  });
});

 
