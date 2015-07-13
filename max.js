var util = require("util");

if (!process.argv[2]) {
    console.log("file required");
    process.exit();
}

var data = require(process.argv[2]);

var keys = Object.keys(data);

function compare(key1, key2) {
    return data[key1] - data[key2];
}

function pad(string, length) {
    string += ""; // make sure it's a string
    while (string.length < length) {
        string += " ";
    }

    return string;
}

function reportKey(key) {
    return pad(pad(key, 12) + " " + data[key], 20);
}

var sorted = keys.sort(compare);

var maxKey = sorted[sorted.length-1];
var maxKey2 = sorted[sorted.length-2];
var maxKey3 = sorted[sorted.length-3];

var output = util.format("%s | %s | %s | %s", process.argv[2], reportKey(maxKey), reportKey(maxKey2), reportKey(maxKey3));
console.log(output);

