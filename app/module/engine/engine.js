"use strict";

const shimo = require("../shimo/shimo");
const fs = require("fs");

const RulePath = __dirname+'/../../../rules/';

async function Run() {
    var files = fs.readdirSync(RulePath);
    let results = [];
    for (let i = 0; i < files.length; i++) {
        let rule = require(RulePath+files[i]);
        results = await RunSingle(rule);
    }

    return new Promise(function(resolve) {
        resolve(results);
    });
}

async function RunSingle(rule) {
    return shimo.LoadData(rule);
}

module.exports = {
    Run: Run,
    RunSingle: RunSingle,
}
