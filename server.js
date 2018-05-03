
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var friends = require('friends.js');

var app = express();
var PORT = process.env.PORT || 4000; 
app.use(express.static('app/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
require('apiRoutes.js')(app);
require('htmlRoutes.js')(app);

app.listen(process.env.PORT || 4000);