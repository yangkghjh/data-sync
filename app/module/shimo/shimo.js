"use strict";

const shimo = require("shimo-sheet2json");
const as = require('as-type');
const mock = require('./mock.js');

async function LoadData(rule) {
    if (as.boolean(process.env.IsMock)) {
        return mock.Data;
    }
    const client = new ShimoSheetFetcher({
        username: process.env.ShimoUsername,
        password: process.env.ShimoPassword,
    });

    return client.getFileData(rule);
}

module.exports = {
    LoadData: LoadData,
};
