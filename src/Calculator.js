const Operations = require('./Operations/MathOperations');

class Calculator {

    Sum(a, b){
        return(Operations.Sum(a, b));
    }

}

module.exports = Calculator;
