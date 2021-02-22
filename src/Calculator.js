const Operations = require('./Operations/MathOperations');
const Calculation = require('./Models/Calculation');

class Calculator {

    static history = [];

    static sum(a, b){

        let calculation = new Calculation(a, b, Operations.sum);
        let result = calculation.getResults();
        this.history.push(calculation);
        return result;

    }

    static subtract(a, b){

        let calculation = new Calculation(a, b, Operations.subtract);
        let result = calculation.getResults();
        this.history.push(calculation);
        return result;

    }

    static multiply (a, b){

        let calculation = new Calculation(a, b, Operations.multiply);
        let result = calculation.getResults();
        this.history.push(calculation);
        return result;

    }

    static divide(a, b){

        let calculation = new Calculation(a, b, Operations.divide);
        let result = calculation.getResults();
        this.history.push(calculation);
        return result;

    }

    static rootOf(a, b){

        let calculation = new Calculation(a, b, Operations.rootOf);
        let result = calculation.getResults();
        this.history.push(calculation);
        return result;

    }

    static power(a, b){

        let calculation = new Calculation(a, b, Operations.power);
        let result = calculation.getResults();
        this.history.push(calculation);
        return result;

    }

    static clearHistory(){

        history = [];

    }

}

module.exports = Calculator;
