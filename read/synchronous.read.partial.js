const fs = require('fs');

module.exports.read = () => {
    const fd = fs.openSync('./data/app.log');
    let count = 0;
    
    do {
        let buffer = Buffer.alloc(200);
        count = fs.readSync(fd, buffer, 0, buffer.length, null);
        console.log(buffer.toString());
    } while (count == 200);    
};
