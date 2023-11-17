const path = require("path");
const fs = require("fs");
const compress = require("./compress");
const batchCompress = require("./batchCompress");
const chalk = require("chalk");

module.exports = function({url, file}) {
    // 读取key
    const key = fs.readFileSync(path.join(__dirname, './key.json'), 'utf8');
    if (!key) {
        console.log(chalk.red("请先使用 -i 设置tinypng API key"));
        return;
    }
    if (url) {
        compress(url);
        return;
    }
    file = file ? path.join(process.cwd(), file) : process.cwd();
    if (file) {
        batchCompress(file);
    }
}