const strtok3 = require('strtok3');
const { fileTypeFromTokenizer } = require('./core.js');

async function fileTypeFromFile(path) {
  const tokenizer = await strtok3.fromFile(path);
  try {
    return await fileTypeFromTokenizer(tokenizer);
  } finally {
    await tokenizer.close();
  }
}

module.exports = {
  fileTypeFromFile,
  ...require('./core.js')
};
