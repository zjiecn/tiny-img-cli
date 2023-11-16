const fs = require("fs");
const tinify = require("tinify");
tinify.key = "2jxgPRqGtMQ0H3jCXr2FfvdJhFbS09Kl";


module.exports = function(url) {
    fs.readFile(url, function(err, sourceData) {
        if (err) throw err;
        tinify.fromBuffer(sourceData).toBuffer(function(err, resultData) {
          if (err) throw err;
          fs.writeFile(`./2.png`, resultData, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          });
        });
      });
}