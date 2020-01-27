"use strict"

const dataframe = require("dataframe-js").DataFrame;

function Encode(rule, rows) {
    let columns = [];
    rule.columns.forEach((column) => {
        columns.push(column.name);
    });
    let df = new dataframe(rows, columns);
    
    return df.toCSV();
}

module.exports = {
    Encode: Encode,
};
