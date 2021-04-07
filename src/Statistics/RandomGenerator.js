const randSeed = require('random-seed');

class RandomGenerator {
    static randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    static randomDecimal(min, max) {
        return Math.random() * (max - min) + min;
    }

    static seededRandomInteger(seed, min, max) {
        let rand = randSeed.create(seed);
        return rand.intBetween(min, max);
    }

    static seededRandomDecimal(seed, min, max) {
        let rand = randSeed.create(seed);
        return rand.floatBetween(min, max);
    }

    static seededIntegerList(count, seed, min, max){
        let returnArray = [];
        for(let x=0; x<count; x++) {
            let rand = randSeed.create(seed);
            returnArray[x] = rand.intBetween(min, max);
        }
        return returnArray;
    }

    static seededDecimalList(count, seed, min, max) {
        let returnArray = [];
        let rand = randSeed.create(seed);
        for(let x=0;x<count;x++) {
            returnArray[x] = rand.intBetween(min, max);
        }
        return returnArray;
    }

    static selectRandomFromList(list) {
        let randIndex = RandomGenerator.randomInteger(0, list.length - 1);
        return list[randIndex];
    }

    static seededSelectRandomFromList(list, seed) {
        let randIndex = RandomGenerator.seededRandomDecimal(seed, 0, list.length - 1);
        return list[randIndex];
    }

    static selectNumItemsFromList(count, list) {
        let returnArray = [];
        for(let x=0; x<count; x++) {
            let randIndex = RandomGenerator.randomInteger(0, list.length - 1);
            returnArray[x] = list[randIndex];
        }
        return returnArray;
    }

    static seededSelectNumItemsFromLIst(seed, count, list) {
        let returnArray = [];
        for(let x=0; x<count; x++) {
            let randIndex = RandomGenerator.seededRandomInteger(seed, 0, list.length - 1);
            returnArray[x] = list[randIndex];
        }
        return returnArray;
    }
}
module.exports = RandomGenerator;