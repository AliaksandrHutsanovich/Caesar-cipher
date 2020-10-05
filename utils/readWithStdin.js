const EventEmitter = require('events');

const readWithStdin = () => {
  const stdin = new EventEmitter();

  process.stdin
    .on('data', (data) => {
      const lines = ('' + data).split(/\r/);
      lines.forEach(line => stdin.emit('line', line));
    });

  return stdin;
};

module.exports = readWithStdin;
