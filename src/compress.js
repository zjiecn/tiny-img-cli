const path = require("path");
const fs = require("fs");
const { readFile } = require('node:fs/promises');
const tinify = require("tinify");
// tinify.key = "2jxgPRqGtMQ0H3jCXr2FfvdJhFbS09Kl";
module.exports = async function(url) {
  try {
    const config = fs.readFileSync(path.join(__dirname, './key.json'), 'utf8');
    if (!config || !config.key) {
      throw new Error("请先使用'tiny -i <key>'命令设置tinypng API key");
    }
    tinify.key = JSON.parse(key).key;
    
    const res = await readFile(url);
    compress(res, url)
  } catch (error) {
    console.log(chalk.red("压缩失败，请重试！"));
  }
}

function compress(sourceData, url) {
  tinify.fromBuffer(sourceData).toBuffer(async function(err, resultData) {
    if (err) throw err;
    fs.writeFile(url, resultData, (err) => {
      if (err) throw err;
      console.log(url)
      console.log('The file has been saved!');
    });
  });
}