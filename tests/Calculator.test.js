const calculator = require('../src/Calculator');


test('calculator adding two numbers', function(){

    let Calculator = new calculator();

    let result = Calculator.sum(1, 2);

    expect(result).toBe(3);

});
