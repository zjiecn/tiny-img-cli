const path = require("path");
const fs = require("fs");
const { readFile } = require('node:fs/promises');
const tinify = require("tinify");
// tinify.key = "2jxgPRqGtMQ0H3jCXr2FfvdJhFbS09Kl";
module.exports = async function(url) {
  try {
    const key = fs.readFileSync(path.join(__dirname, './key.json'), 'utf8');
    if (!key) {
      console.log(chalk.red("请先使用 -i 设置tinypng API key"));
    }
    tinify.key = JSON.parse(key).key;
    
    const res = await readFile(url);
    compress(res, url)
  } catch (error) {
    console.log(error)
  }
}

function compress(sourceData, url) {
  tinify.fromBuffer(sourceData).toBuffer(async function(err, resultData) {
    if (err) throw err;
    fs.writeFile(url, resultData, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  });
}