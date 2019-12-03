// Require express and create an instance of it
var express = require('express');
var app = express();
var path = require('path');

// on the request to root (localhost:3000/)
app.get('/', function (req, res) {
    res.sendfile('\login.html');
});
//import CSS
app.use(express.static(path.join(__dirname, '/CSS')));

// On localhost:3000/welcome
app.get('/MainPage', function (req, res) {
    res.sendfile('\MainPage.html');
});

app.get('/driverPage', function (req, res) {
    res.sendfile('\driverPage.html');
});

app.get('/managerPage', function (req, res) {
    res.sendfile('\managerPage.html');
});

app.get('/page1', function (req, res) {
    res.sendfile('\page1.html');
});



// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

// start the server in the port 3000 !
app.listen(3000, function () {
    console.log('Example app listening on port 3000.');
});



