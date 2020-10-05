const {
  ARG_FORMS,
  ARG_KEYS_CONFIG,
} = require ('./constants');
const { formattedArgs, actionType, num } = require('./utils/args');
const { getInputFilePath, getOutputFilePath, initWriteParams, initFileOnWrite } = require('./utils/checkOnFiles');
const readWithStdin = require('./utils/readWithStdin');
const writeWithStdout = require('./utils/writeWithStdout');
const { readFile, writeFile } = require('./utils/operationsWithFiles');
const checkNoRequiredArg = require('./utils/checkNoRequiredArg');
const checkOnWrongParamTitle = require('./utils/checkOnWrongParamTitle');
const checkPermittedValues = require('./utils/checkPermittedValues');
const cesarCipher = require('./utils/cesarCipher');

try {
  if (typeof num !== 'number') {
    throw Error(`the arg --shift has wrong value`);
  }
  Object.keys(ARG_KEYS_CONFIG).forEach((key) => {
    if (checkNoRequiredArg(ARG_KEYS_CONFIG[key])) {
      throw Error(`the arg --${ARG_KEYS_CONFIG[key][ARG_FORMS.LONG]} is required`);
    }
  }),
  checkOnWrongParamTitle();
  checkPermittedValues();

  const inputFilePath = getInputFilePath(formattedArgs);
  const outputFilePath = getOutputFilePath(formattedArgs);

  if (inputFilePath) {
    const initFileOnRead = initWriteParams(outputFilePath, writeFile);
    initFileOnRead(inputFilePath, readFile);
  }

  else {
    const stdin = readWithStdin();

    if (outputFilePath) {
      const callbackToWrite = (data) => {
        const operatedData = cesarCipher(data, num, actionType);
        initFileOnWrite(outputFilePath, operatedData, writeFile);
      }
      stdin.on('line', callbackToWrite);
    } else {
      stdin.on('line', writeWithStdout);
    }
  }
  
} catch ({ message }) {
  console.log(`\n ${message} \n`);
}
