const file = require('../src/fileOps/File');
const fs = require('fs');

test('Ensure getAbsoluteFilepath function works', function(){

    let fileName = "data/worldcities.csv";
    let absoluteFilePath = file.getAbsolutePath(fileName);

    fs.access(absoluteFilePath, fs.F_OK, function(err){
        let fileExists = !err;
        expect(fileExists).toBeTruthy();
    }
    );

});
