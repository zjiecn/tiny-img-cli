const path = require("path");
const compress = require("./compress");
const batchCompress = require("./batchCompress");

module.exports = function({url, file}) {
    if (url) {
        compress(url);
        return;
    }
    file = file ? path.join(process.cwd(), file) : process.cwd();
    if (file) {
        batchCompress(file);
    }
}