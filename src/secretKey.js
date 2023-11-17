const fs = require('fs');
const path = require('path');

module.exports = function(key) {
    console.log({
        key: key
    })
    fs.writeFileSync(path.join(__dirname, './key.json'), JSON.stringify({
        key: key
    }), 'utf8')
}