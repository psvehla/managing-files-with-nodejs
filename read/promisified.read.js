const { convertCsv } = require('./csv.parse');
const fs = require('fs');
const { promisify } = require('util');

module.exports.read = () => {
    const readFile = promisify(fs.readFile);

    // chaining
    readFile('./data/pulitzer-circulation-data.csv', "utf8")
        .then(data => console.table(convertCsv(data)))
        .catch(err => console.log(`File error: ${err}`));
    
    // async/await
    const read = async () => {
        const data = await readFile('./data/pulitzer-circulation-data.csv', "utf8");
        console.table(convertCsv(data));
    };
    
    read();    
};
