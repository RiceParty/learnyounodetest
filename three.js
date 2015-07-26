/**
 * Created by onion on 15/7/16.
 */
var fs = require("fs");
var buffer = fs.readFileSync(process.argv[2]);
console.log(buffer.toString().split("\n").length - 1);
