const calculator = require('../src/Calculator');

test('calculator adding two numbers', function(){

    let result = calculator.sum(1, 2);
    expect(result).toBe(3);

});

test('calculator subtracting two numbers', function(){

    let result = calculator.subtract(3, 2);
    expect(result).toBe(1);

});

test('calculator  multiplying two numbers', function(){

    let result = calculator.multiply(1, 2);
    expect(result).toBe(2);

});

test('calculator dividing two numbers', function(){

    let result = calculator.divide(10, 5);
    expect(result).toBe(2);

});

test('calculator squaring a number by another', function(){

    let result = calculator.rootOf(9, 2);
    expect(result).toBe(3);

});

test('calculator raising a number to another', function(){

    let result = calculator.power(2, 3);
    expect(result).toBe(8);

});