const path = require("path");
const fs = require("fs");
const compress = require("./compress");
const batchCompress = require("./batchCompress");

module.exports = function({url, file}) {
    // 读取key
    const config = fs.readFileSync(path.join(__dirname, './key.json'), 'utf8');
    if (!config || !JSON.parse(config)?.key) {
        throw new Error("请先使用'tiny -i <key>'命令设置tinypng API key");
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