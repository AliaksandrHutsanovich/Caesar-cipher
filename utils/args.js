const minimist = require('minimist');
const { ARG_KEYS_CONFIG, ARG_KEYS_TITLES, ARG_FORMS } = require('../constants');

const args = minimist(process.argv.slice(2));
const formattedArgs = Object
  .keys(args)
  .slice(1)
  .reduce((acc, currentKey) => {
    acc[currentKey] = args[currentKey];
    return acc;
  }, {});

const actionType = formattedArgs[ARG_KEYS_CONFIG[ARG_KEYS_TITLES.ACTION][ARG_FORMS.LONG]]
  || formattedArgs[ARG_KEYS_CONFIG[ARG_KEYS_TITLES.ACTION][ARG_FORMS.SHORT]];

const num = formattedArgs[ARG_KEYS_CONFIG[ARG_KEYS_TITLES.SHIFT][ARG_FORMS.LONG]]
  || formattedArgs[ARG_KEYS_CONFIG[ARG_KEYS_TITLES.SHIFT][ARG_FORMS.SHORT]];

module.exports = { formattedArgs, actionType, num };
