const utils = require('./utils');
it('Should add two numbers', () => {
  var res = utils.add(1,2);
  if(res !== 3) {
    throw new Error(`Expected 3 but found ${res}`);
  }
});

it('Should square the number', () => {
  var res = utils.square(3);
  if(res !== 9) {
    throw new Error(`Expected 9 but found ${res}`);
  }
  res = utils.square(9);
  if(res !== 81) {
    throw new Error(`Expected 9 but found ${res}`);
  }
});
