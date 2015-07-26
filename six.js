/**
 * Created by onion on 15/7/16.
 */
var mymodule = require("./module.js");
mymodule(process.argv[2], process.argv[3], callback);

function callback(err, data) {
    if (err) console.error(err);
    data.forEach(function (file) {
            console.log(file);
        }
    )
}