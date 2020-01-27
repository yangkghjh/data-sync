"use strict";

require('dotenv').config();
const engine = require("./app/module/engine/engine");

engine.Run().then((data) => {
    console.log(data);
});
