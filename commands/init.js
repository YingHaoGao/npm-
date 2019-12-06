const inquirer = require("inquirer");
const program = require("commander");
const chalk = require("chalk");
const download = require("download-git-repo");
const ora = require("ora");
const spinner = ora("下载中，请稍等......");
const fs = require("fs");
const path = require("path");
const option = program.parse(process.argv).args[0];

// 生产项目默认名
const defaultName = typeof option === "string" ? option : "vue-pc";
// 交互使用的问题
const questionList = [
    {
        type: 'input',
        name: 'Project name',
        message: '输入项目名称',
        default: defaultName,
        filter(val) {
          return val.trim()
        },
        // 验证数据
        validate(val) {
          const validate = (val.trim().split(" ")).length === 1
          // return validate || '项目名称不允许有空格';
          return validate || 'Project name is not allowed to have spaces ';
        },
        transformer(val) {
          return chalk.blue(val);
        }
      },{
        type: 'input',
        name: 'description',
        message: '输入项目描述',
        default: '作者很懒，没有添加任何描述',
        validate (val) {
          return true;
        },
        transformer(val) {
          return chalk.blue(val);
        }
      }, {
        type: 'input',
        name: 'author',
        message: '项目开发者',
        default: 'MuTong',
        validate (val) {
          return true;
        },
        transformer(val) {
          return chalk.blue(val);
        }
      },{
        type: "list",
        name: "program type",
        message: "program type",
        choices: [
            "vue-pc-staging",
            "vue-console-staging",
            "weex",
            "react-pc-staging",
            "react-console-staging",
            "react-app",
        ],
        default:"vue-pc-default",
        // 使用filter将回答变成小写
        filter: function(val){
            return val.toLowerCase();
        }
    }
]
// 生成项目目录
fs.mkdir(defaultName, err => {
    if(err){
        console.log("项目目录生成失败")
    }
})

// 根据用户选择的语言去配置对应的配置文件
inquirer.prompt(questionList).then(answers => {
    if (answers["program type"] === "vue-pc-staging"){
      spinner.start();
      download("direct:https://github.com/YingHaoGao/vue-pc-staging.git#master", answers["Project name"], { clone: true }, (err) => {
        if(err){
            spinner.stop();
            console.log(err)
        }else{
            spinner.stop();
            console.log(chalk.red("项目初始化成功"));
        }
      });
    }
    else if(answers["program type"] === "vue-console-staging"){
      spinner.start();
      download("direct:https://github.com/YingHaoGao/vue-console-staging.git#master", answers["Project name"], { clone: true }, (err) => {
        if(err){
            spinner.stop();
            console.log(err)
        }else{
            spinner.stop();
            console.log(chalk.red("项目初始化成功"));
        }
      });
    }
    else if(answers["program type"] === "weex"){
      console.log("尽请期待...")
    }
    else if(answers["program type"] === "weex"){
      console.log("尽请期待...")
    }
    else if(answers["program type"] === "react-console-staging"){
      spinner.start();
      download("direct:https://github.com/YingHaoGao/react-console-staging.git#master", answers["Project name"], { clone: true }, (err) => {
        if(err){
            spinner.stop();
            console.log(err)
        }else{
            spinner.stop();
            console.log(chalk.red("项目初始化成功"));
        }
      });
    }
    else if(answers["program type"] === "weex"){
      console.log("尽请期待...")
    }
})