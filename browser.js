const { ReadableWebToNodeStream } = require('readable-web-to-node-stream');
const { fileTypeFromStream: coreFileTypeFromStream, fileTypeFromTokenizer, fileTypeFromBuffer, fileTypeStream } = require('./core.js');

async function fileTypeFromStream(stream) {
  const readableWebToNodeStream = new ReadableWebToNodeStream(stream);
  const fileType = await coreFileTypeFromStream(readableWebToNodeStream);
  await readableWebToNodeStream.close();
  return fileType;
}

module.exports = {
  fileTypeFromStream,
  fileTypeFromTokenizer,
  fileTypeFromBuffer,
  fileTypeStream,
};
