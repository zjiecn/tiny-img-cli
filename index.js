#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const { Command } = require("commander");
const program = new Command();
const compress = require("./src/index.js");
const setKey = require("./src/secretKey.js");

const packageObj = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "./package.json"), {
    encoding: "utf-8"
  })
);

program
  .description(chalk.green("基于tinypng的图片压缩工具"))
  .version(packageObj.version);

program
  .option('-i, --key <key>', 'init tinypng API key')
  .option('-u, --url <url>', 'specified directory')
  .option('-f, --file <file>', 'specified file');

program.parse(process.argv);

const { key, url, file} = program.opts();
if (key) {
  setKey(key);
} else {
  compress({ url, file });
};

