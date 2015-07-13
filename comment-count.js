var util = require("util");

if (!process.argv[2]) {
    console.log("file required");
    process.exit();
}


if (!process.argv[3]) {
    console.log("subreddit required");
    process.exit();
}

var file = process.argv[2];
var subreddit = process.argv[3];

var data = require(file);

var count = data[subreddit] || '';

console.log(count);
