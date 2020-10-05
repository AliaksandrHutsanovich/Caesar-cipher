const { POSSIBLE_PARAM_TITLES, ARG_KEYS_CONFIG, ARG_FORMS } = require('../constants');
const { formattedArgs } = require('./args');

const checkOnWrongParamTitle = () => Object.keys(formattedArgs).forEach(
  (key) => {
    if (!POSSIBLE_PARAM_TITLES.some((val) => val === key)) {
      throw Error(
        `
          the param ${key} is unknown

          commands: ${Object.keys(ARG_KEYS_CONFIG).reduce((acc, currentKey) => {
            return ` ${acc}${ARG_KEYS_CONFIG[currentKey][ARG_FORMS.LONG]}, ${ARG_KEYS_CONFIG[currentKey][ARG_FORMS.SHORT]}, `;
          }, '')}
        `,
      );
    }
  },
);

module.exports = checkOnWrongParamTitle;
