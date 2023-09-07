/* eslint-disable no-undef */
const fs = require('fs');

function createJson(jsonData, fileName) {
  const filePath = './public/output/' + fileName;

  const data = JSON.stringify(jsonData);

  fs.writeFile(filePath, data, (error) => {
    if (error) {
      console.error(error);
      throw error;
    }
  });
}

module.exports = createJson;
