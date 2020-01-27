"use strict";

const shimo = require("../shimo/shimo");
const fs = require("fs");
const encoder = require("../format/encoder");

const RulePath = __dirname + '/../../../rules/';

async function Run(format) {
    var files = fs.readdirSync(RulePath);
    let results = [];
    for (let i = 0; i < files.length; i++) {
        let rule = require(RulePath + files[i]);
        let result = await RunSingle(rule);
        results[rule.id] = encoder(format).Encode(rule, result);
    }

    return new Promise(function (resolve) {
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
