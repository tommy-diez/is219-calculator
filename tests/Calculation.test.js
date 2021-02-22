const Calculation = require('../src/Models/Calculation');
const Operations = require('../src/Operations/MathOperations');

test('Instantiating Calculation Object', function(){

    let calculation = new Calculation(1, 2, Operations.sum);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe(Operations.sum);

});

test('Getting result from Calculation Object Sum', function(){

    let calculation = new Calculation(2, 3, Operations.sum);
    expect(calculation.getResults()).toBe(5);

});

test('Getting result from Calculation Object Subtract', function(){

    let calculation = new Calculation(10, 5, Operations.subtract);
    expect(calculation.getResults()).toBe(5);

});

test('Getting result from Calculation Object multiply', function(){

    let calculation = new Calculation(2, 3, Operations.multiply);
    expect(calculation.getResults()).toBe(6);

});

test('Getting result from Calculation Object divide', function(){

    let calculation = new Calculation(4, 2, Operations.divide);
    expect(calculation.getResults()).toBe(2);

});

test('Getting result from Calculation Object root', function(){

    let calculation = new Calculation(64, 2, Operations.rootOf);
    expect(calculation.getResults()).toBe(8);

});

test('Getting result from Calculation Object power', function(){

    let calculation = new Calculation(2, 3, Operations.power);
    expect(calculation.getResults()).toBe(8);

});

