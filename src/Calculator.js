const sum = require('./Operations/Sum');
const subtract = require('./Operations/Subtract');
const divide = require('./Operations/Divide');
const multiply = require('./Operations/Multiply');
const rootOf = require('./Operations/RootOf');
const power = require('./Operations/Power');
const Calculation = require('./Models/Calculation');

class Calculator {

    static history = [];

    static sum(a, b){

        let calculation = new Calculation(a, b, sum);
        let result = calculation.getResults();
        this.history.push(calculation);
        return result;

    }

    static subtract(a, b){

        let calculation = new Calculation(a, b, subtract);
        let result = calculation.getResults();
        this.history.push(calculation);
        return result;

    }

    static multiply (a, b){

        let calculation = new Calculation(a, b, multiply);
        let result = calculation.getResults();
        this.history.push(calculation);
        return result;

    }

    static divide(a, b){

        let calculation = new Calculation(a, b, divide);
        let result = calculation.getResults();
        this.history.push(calculation);
        return result;

    }

    static rootOf(a, b){

        let calculation = new Calculation(a, b, rootOf);
        let result = calculation.getResults();
        this.history.push(calculation);
        return result;

    }

    static power(a, b){

        let calculation = new Calculation(a, b, power);
        let result = calculation.getResults();
        this.history.push(calculation);
        return result;

    }

    static clearHistory(){

        history = [];

    }

}

module.exports = Calculator;
