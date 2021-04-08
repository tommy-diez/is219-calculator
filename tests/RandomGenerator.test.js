const randomGenerator = require('../src/Statistics/RandomGenerator');

test('Getting random integer', function() {
    let randomInt = randomGenerator.randomInteger(0, 2);
    expect(Number.isInteger(randomInt)).toBe(true);
});

test('Getting random decimal', function() {
    let randomDec = randomGenerator.randomDecimal(0, 2);
    expect(Number.isInteger(randomDec)).toBe(false);
});

test('Getting random seeded integer', function() {
    let randomInt = randomGenerator.seededRandomInteger('Magic', 1, 100);
    expect(randomInt).toBe(5);
});

test('Getting random seeded decimal', function() {
    let randomDec = randomGenerator.seededRandomDecimal('test', 1, 100);
    expect(randomDec).toBeCloseTo(5.10, 1);
});

test('Getting a random seeded Integer list', function() {
    let list = randomGenerator.seededIntegerList(3, )
});

