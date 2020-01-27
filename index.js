"use strict";

require('dotenv').config();
const engine = require("./app/module/engine/engine");

engine.Run('csv').then((data) => {
    console.log(data);
});
