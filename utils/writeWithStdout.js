const cesarCipher = require('./cesarCipher');
const { actionType, num } = require('./args');

const writeWithStdout = (data) => {
  
  const operatedData = cesarCipher(data, num, actionType);
  process.stdout.write(`${operatedData}\n`);
  process.exit(0);
};

module.exports = writeWithStdout;
