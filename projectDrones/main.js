//Samen gewerkt met Jonick Makau, Galvani Makau, Jelle Van Loock en Kevin Aerts

// inladen van de dependencies
var express = require('express'); // eenvoudige webserver in node js
var parser = require('body-parser'); // extensie op express voor eenvoudig body uit te lezen
var uuid = require('uuid');

var dal = require("./storage.js");
//validatie inladen
var validation = require("./validate.js");
var validationlocaties = require("./validatelocaties.js");
var validationaanwezigheden = require("./validateaanwezigheden.js");
var validationbewegingen = require("./validatebewegingen.js");

// aanmaken van de webserver variabele
var app = express();
// automatische json-body parsers van request MET media-type application/json gespecifieerd in de request.
app.use(parser.json());
