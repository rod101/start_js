var express = require('express');
var app = express();

app.listen(7000, function () {
    console.log("Listening on port 7000");
});

app.set("appPath");
app.use(express.static(__dirname));

app.route("/*").get(function (req, res) {
    res.sendfile(__dirname + "/index.html");
});
