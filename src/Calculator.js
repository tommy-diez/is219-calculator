const Operations = require('./Operations/MathOperations');

class Calculator {

    sum(a, b){
        return(Operations.sum(a, b));
    }

}

module.exports = Calculator;
