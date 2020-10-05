const {
  ARG_KEYS_CONFIG,
  ARG_KEYS_TITLES,
  PERMITTED_VALUES,
} = require('../constants');

const MIN = {
  lowerCase: 97,
  upperCase: 65,
};

const MAX = {
  lowerCase: 122,
  upperCase: 90,
};

const leadToIntervalForEncode = (code, min, max, num) => {
  code += num;
  if (code > min && code < max) {
    return String.fromCharCode(code);
  }
  while (code > max) {
    code = code - max + min;
  }
  return String.fromCharCode(code);
};

const leadToIntervalForDecode = (code, min, max, num) => {
  code -= num;
  if (code > min && code < max) {
    return String.fromCharCode(code);
  }
  while (code < min) {
    code = code + max - min;
  }
  return String.fromCharCode(code);
};

const leadToInterval = {
  [ARG_KEYS_CONFIG[ARG_KEYS_TITLES.ACTION][PERMITTED_VALUES][0]]: leadToIntervalForEncode,
  [ARG_KEYS_CONFIG[ARG_KEYS_TITLES.ACTION][PERMITTED_VALUES][1]]: leadToIntervalForDecode,
};

const cesarCipher = (str, num, type) => {
  return str.split('').map((s) => {
    let code = s.charCodeAt();
    if (code > MIN.lowerCase && code < MAX.lowerCase) {
      return leadToInterval[type](code, MIN.lowerCase, MAX.lowerCase, num);
    } else if (code > MIN.upperCase && code < MAX.upperCase) {
      return leadToInterval[type](code, MIN.upperCase, MAX.upperCase, num);
    }
    return s;
  }).join('');
};

module.exports = cesarCipher;
