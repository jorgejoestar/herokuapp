"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app["get"]('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(process.env.PORT || 4000, function () {
    console.log('Your node js server is running');
});
