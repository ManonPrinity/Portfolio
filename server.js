var express = require("express");
var app = express();
var server = app.listen(8080);
// var mongoose = require("mongoose");
// var io = require("socket.io").listen(server);

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res)
{
	res.render("index.ejs");
});

app.use(function(req, res)
{
	res.render("404.ejs");
});
