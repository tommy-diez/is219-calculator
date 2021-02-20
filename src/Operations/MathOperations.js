class MathOperations {

    static sum(a, b){

        return a + b;

    }

    static subtract(a, b){

        return a - b;

    }

    static multiply(a, b){

        return a * b;

    }

    static divide(a, b){

        return a / b;

    }

    static rootOf(a, b){

        return Math.pow(a, (1/b));

    }

    static power(a, b){

        return a ** b;

    }

}

module.exports = MathOperations;

