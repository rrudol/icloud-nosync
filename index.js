#!/usr/bin/env node

/* Solution from: https://davidsword.ca/development/prevent-icloud-syncing-node_modules-folder/ */

var shell = require("shelljs");

shell.exec("npm install");
shell.exec("mv node_modules node_modules.nosync");
shell.exec("ln -s node_modules.nosync/ node_modules");

console.log("done");
