const fs = require("fs");
const dateformat = require ("dateformat");
const DATA_FILE = "test.js";

let d = new Date();
let s = dateformat(d, "dd.mm.");

let zpravy = new Array();
let o = {};
o.zprava = "testik";
o.cas = new Date();
zpravy.push(o);
fs.writeFileSync("data.json", JSON.stringify(zpravy));
if (fs.existsSync("data.json")) {
    zpravy = JSON.parse(fs.readFileSync("data.json"));
}

console.log(s);
