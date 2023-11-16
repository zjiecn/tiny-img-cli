const compress = require("./compress");

module.exports = function({url, file}) {
    if (url) {
        compress(url)
        return;
    }

}