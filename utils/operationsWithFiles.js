const fs = require('fs');
const { initFileOnWrite } = require('./checkOnFiles');
const cesarCipher = require('./cesarCipher');
const { actionType, num } = require('./args');

const readFile = (path, pathToWrite, callbackToWrite) => {
  const readable = fs.createReadStream(path);
  readable.on('data', (data) => {
    const lines = ('' + data).split(/\r/);
    if (pathToWrite) {
      initFileOnWrite(pathToWrite, lines[0], callbackToWrite);
    } else {
      //write with stdout

      const formattedData = cesarCipher(lines[0], num, actionType);

      process.stdout.write(`${formattedData}\n`);
      process.exit(0);
    }
  });
};

const writeFile = (path, data) => {

  const writable = fs.createWriteStream(path);
  const formattedData = cesarCipher(data, num, actionType);
  writable.write(formattedData);
  writable.end();
  writable.on('finish', () => {
    process.exit(0);
  });
};

module.exports = { readFile, writeFile };
