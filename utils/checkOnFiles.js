const fs = require('fs');

const { ARG_KEYS_CONFIG, ARG_KEYS_TITLES, ARG_FORMS } = require('../constants');

const inputLongName = ARG_KEYS_CONFIG[ARG_KEYS_TITLES.INPUT][ARG_FORMS.LONG];
const inputShortName = ARG_KEYS_CONFIG[ARG_KEYS_TITLES.INPUT][ARG_FORMS.SHORT];

const outputLongName = ARG_KEYS_CONFIG[ARG_KEYS_TITLES.OUTPUT][ARG_FORMS.LONG];
const outputShortName = ARG_KEYS_CONFIG[ARG_KEYS_TITLES.OUTPUT][ARG_FORMS.SHORT];

const getInputFilePath = (args) => args[inputLongName] || args[inputShortName];

const getOutputFilePath = (args) => args[outputLongName] || args[outputShortName];

const initFileOnWrite = (pathToWrite, data, callbackToWrite) => {
  callbackToWrite(pathToWrite, data);
};

const initWriteParams = (pathToWrite, callbackToWrite) => {
  const initFileOnRead = (pathToRead, callbackToRead) => {
    fs.access(pathToRead, fs.constants.R_OK, (err) => {
      if (err) {
        throw Error(`the file with path ${pathToRead} is impossible to read`);
      } else {
        callbackToRead(pathToRead, pathToWrite, callbackToWrite);
      };
    });
  };

  return initFileOnRead;
};

module.exports = { getInputFilePath, getOutputFilePath, initWriteParams, initFileOnWrite };
