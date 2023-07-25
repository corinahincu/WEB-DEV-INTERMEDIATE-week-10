
const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

/* readStream.on('data', chunk => {
    console.log('---- NEW CHUNK ----');
    console.log(chunk);
    writeStream.write('\nNEW CHUNK:\n');
    writeStream.write(chunk);
}); */
 // we can write the same code, using pipe
// piping
readStream.pipe(writeStream);

// The pipe() method in Node.js allows you to connect the output of a Readable stream to the input of a Writable stream. It establishes a data flow between the two streams, and data is automatically passed from the Readable stream to the Writable stream.


