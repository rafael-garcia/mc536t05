var express = require('express');
var app = express();

var server = app.listen(8080, function() {
    console.log('Listening on port %d', server.address().port);
});

function errorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', { error: err });
}

// error
app.use(errorHandler(err, req, res, next);