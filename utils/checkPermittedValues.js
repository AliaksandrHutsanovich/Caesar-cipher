const { ARG_KEYS_CONFIG, ARG_FORMS, PERMITTED_VALUES } = require('../constants');
const { formattedArgs } = require('./args');

const checkPermittedValues = () => Object.keys(formattedArgs).forEach(
  (key) => {
    Object.keys(ARG_KEYS_CONFIG).forEach((configKey) => {
      if ((ARG_KEYS_CONFIG[configKey][ARG_FORMS.LONG] === key || ARG_KEYS_CONFIG[configKey][ARG_FORMS.SHORT] === key) && ARG_KEYS_CONFIG[configKey][PERMITTED_VALUES]) {
        if (!ARG_KEYS_CONFIG[configKey][PERMITTED_VALUES].some((permValue) => permValue === formattedArgs[key])) {
          throw Error(`the arg --${ARG_KEYS_CONFIG[configKey][ARG_FORMS.LONG]} have unpermitted value`);
        }
      }
    });
  },
);

module.exports = checkPermittedValues;
