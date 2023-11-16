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
  .option("-i, --init <key>", "设置tinypng API key")
  .description(chalk.green("设置压缩图片调用API的key"))
  .description(chalk.green("指定图片文件"))
  .action(({key}) => {
   console.log(key)
    setKey(key);
  });

program.parse();

program
  .option("-u, --url <url>", "图片压缩相对路径")
  .description(chalk.green("图片压缩，默认路径为当前目录"))
  .option("-f, --file <file>", "指定图片文件")
  .description(chalk.green("指定图片文件"))
  .action(({url, file}) => {
    // if (!url &&!file) {
    //   console.log(chalk.red("请输入图片路径"));
    //   return;
    // }
    compress({ url, file });
  });
program.parse();


