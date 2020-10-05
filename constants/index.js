const IS_REQURED = 'isRequared';
const PERMITTED_VALUES = 'permittedValues';

const ARG_FORMS = {
  LONG: 'longForm',
  SHORT: 'shortForm',
};

const ARG_KEYS_TITLES = {
  SHIFT: 'shift',
  ACTION: 'action',
  INPUT: 'input',
  OUTPUT: 'output',
};

const ARG_KEYS_CONFIG = {
  [ARG_KEYS_TITLES.SHIFT]: {
    [ARG_FORMS.LONG]: 'shift',
    [ARG_FORMS.SHORT]: 's',
    [IS_REQURED]: true,
  },
  [ARG_KEYS_TITLES.ACTION]: {
    [ARG_FORMS.LONG]: 'action',
    [ARG_FORMS.SHORT]: 'a',
    [IS_REQURED]: true,
    [PERMITTED_VALUES]: ['encode', 'decode'],
  },
  [ARG_KEYS_TITLES.INPUT]: {
    [ARG_FORMS.LONG]: 'input',
    [ARG_FORMS.SHORT]: 'i',
  },
  [ARG_KEYS_TITLES.OUTPUT]: {
    [ARG_FORMS.LONG]: 'output',
    [ARG_FORMS.SHORT]: 'o',
  },
};

const POSSIBLE_PARAM_TITLES = Object.keys(ARG_KEYS_CONFIG)
  .reduce(
    (acc, currentKey) => {
      acc.push(ARG_KEYS_CONFIG[currentKey][ARG_FORMS.LONG]);
      acc.push(ARG_KEYS_CONFIG[currentKey][ARG_FORMS.SHORT]);
      return acc;
    }, [],
  );

module.exports = {
  IS_REQURED,
  PERMITTED_VALUES,
  ARG_FORMS,
  ARG_KEYS_TITLES,
  ARG_KEYS_CONFIG,
  POSSIBLE_PARAM_TITLES,
};
