const fs = require('fs');
const stream = fs.createWriteStream('variables.txt');
const buttonColors = require('../config/sass/buttonColors');

const composeObjectWithColors = () => {
  const variableName = 'buttonColors';
  const replacePattern = '$--hb-btn-';
  const variables = [];

  for (const [key] of Object.entries(buttonColors)) {
    const objKey = key
      .replace(replacePattern, '')
      .split('-')
      .map((text, index) =>
        index === 0 ? text : text.charAt(0).toUpperCase() + text.slice(1),
      )
      .join('');

    variables.push(`${objKey}: ${variableName}['${key}']`);
  }

  return variables.join(',');
};

stream.once('open', function () {
  stream.write(composeObjectWithColors());
  stream.end();
});
