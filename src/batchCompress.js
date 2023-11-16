const path = require('path');
const { stat, readdir } = require('node:fs/promises');
const compress = require('./compress');

module.exports = async function(dir) {
    try {
      const res = await stat(dir);
      if (res.isDirectory()) {
        const dirRes = await readdir(dir);
        console.log(dirRes)
        dirRes.forEach(file => {
            if (file.endsWith('.png')) {
                compress(path.join(dir, file))
            }
        });
      }
    } catch (error) {
      console.log(error)
    }
  }