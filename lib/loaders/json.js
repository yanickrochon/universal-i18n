
const minify = require('node-json-minify');
const fs = require('fs');

/**
Simple JSON loader

@param file {string} a file to laod
@return {object}|false
*/
module.exports = function jsonLoader(file) {
  return new Promise(function (resolve, reject) {
    fs.readFile(file, 'utf8', function (err, data) {
      if (err) {
        reject(false);
      } else {
        try {
          resolve(JSON.parse(minify(data)));
        } catch (err) {
          reject(false);
        }
      }
    });
  });
}