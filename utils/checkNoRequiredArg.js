const { ARG_FORMS, IS_REQURED } = require('../constants');
const checkInArgs = require('./checkInArgs');

const checkNoRequiredArg = (argConfig) => (
  !checkInArgs(argConfig[ARG_FORMS.LONG])
  && !checkInArgs(argConfig[ARG_FORMS.SHORT])
  && argConfig[IS_REQURED]
);

module.exports = checkNoRequiredArg;
