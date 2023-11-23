const fs = require('fs');
const path = require('path');
const chalk = require("chalk");
const reg = /^[a-zA-Z0-9]+$/;

module.exports = function(key) {
    if (key || !reg.test(key) || key.length < 32) {
       throw new Error(chalk.red(`tinypng API key格式错误，应该为32位数字和字母组成的字符串`));
    }
    try {
        fs.writeFileSync(path.join(__dirname, './key.json'), JSON.stringify({
            key: key
        }), 'utf8')
        console.log(chalk.green("tinypng API key设置成功"));
    } catch {
        throw new Error(chalk.red("tinypng API key设置失败"));
    }
}