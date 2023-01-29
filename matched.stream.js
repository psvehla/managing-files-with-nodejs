import { createReadStream,  createWriteStream } from 'fs';

const stream = createReadStream('./data/stream.log', {
    encoding: 'utf8',
});

const writer = createWriteStream('./data/output.log');
stream.pipe(writer);
