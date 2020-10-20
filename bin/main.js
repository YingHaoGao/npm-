#!/usr/bin/env node

// process.env.NODE_PATH = __dirname + "/../node_modules";
// const { resolve } = require("path");
// const res = command => resolve(__dirname, '../commands/', command);
// const program = require("commander");
// const pkg = require("../package.json");

// program
//     .version(pkg.version)

// program
//     .usage("<command>")

// program
//     .command("init")
//     .description("开始新建项目")
//     .alias("i")
//     .action(() => {
//     	console.log('action: ' + resolve(__dirname, '../commands/', "init"))
//         require(res("init"))
//     })

// program.parse(process.argv)

// // 判断终端上输入出来bin中的命令是否还有其他值，如果没有终端会直接输出help
// if(!program.args || !program.args.length){
//     program.help()
// }

process.env.NODE_PATH = __dirname + "/../node_modules";
const { resolve } = require("path");
const res = command => resolve(__dirname, '../commands/', command);
const program = require("commander");
const pkg = require("../package.json");

program
    .version(pkg.version)

program
    .usage("<command>")

program
    .command("init")
    .alias("i")
    .description("开始新建项目")
    .action(() => {
     console.log('action: ' + resolve(__dirname, '../commands/', "init"))
        require(res("init"))
    })

program
    .command("mini-compontants")
    .alias("mini-c")
    .description("开始安装小程序自定义组件")
    .action(() => {
     console.log('action: ' + resolve(__dirname, '../commands/', "install_miniapp_compontents"))
        require(res("install_miniapp_compontents"))
    })

program.parse(process.argv)

// 判断终端上输入出来bin中的命令是否还有其他值，如果没有终端会直接输出help
if(!program.args || !program.args.length){
    program.help()
}