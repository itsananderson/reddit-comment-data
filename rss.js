var rss = require("rss");
var magnets = require("./magnets");

var feed = new rss({
    title: "Reddit Comment Data",
    description: "Comments accumulated from the Reddit API"
});

magnets.forEach(function(magnet) {
    feed.item(magnet);
});

console.log(feed.xml({indent:true}));
