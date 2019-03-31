/*
============================================
; Title:  JavaScript Trivia
; Author: Team Commit to Master
; Date:   23 March 2019
; Description: JavaScript Trivia single page application.
;===========================================
*/
var header = require('./header.js');
console.log(header.display('Team Commit to Master', 'EMS project'));
console.log('');

// start program
// require statements
var express = require("express");
var http = require("http");


// assignments
var app = express();

// instructs express to look inside views folder for any files.
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));

// route
app.get("/", function(request, response) {
  response.render("index", {
    title: "Home page"
  });
});

// create node server
http.createServer(app).listen(8080, function() {
  console.log("Application started and listening on port 8080");
});
// end program
