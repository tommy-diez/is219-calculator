const read = require('../src/CSV/Read');
const city = require('../src/Models/City');
let fileName = "data/worldcities.csv";

test('Ensure the CSV reader can read records', function(){

    let cols = read.getRecords(fileName, city);
    expect(cols.length).toBe(6);

});

test('Testing read class instantiation method', function(){

    let reader = new read();
    expect(reader).toBeInstanceOf(read);

});
