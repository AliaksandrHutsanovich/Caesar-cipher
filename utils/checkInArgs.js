const { formattedArgs } = require('./args');

const checkInArgs = (param) => Object.keys(formattedArgs).some((key) => key === param);

module.exports = checkInArgs;
