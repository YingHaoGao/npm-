"use strict";

var exec = require("child_process").exec;

var cmd = "npm i miniapp-compontents";
exec(cmd,{
    maxBuffer: 1024 * 2000
}, function(err, stdout, stderr) {
    if (err) {
        console.log(err);
    } else if (stderr.lenght > 0) {
        new Error(stderr.toString())
    } else {
        console.log(stdout);
    }
});