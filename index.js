const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//setting up express
const app = express();

mongoose.connect('mongodb://localhost/hitmango');
mongoose.Promise = global.Promise;

//middleware
app.use(bodyParser.json( ));

app.use('/api',require('./routes/api'));

//error handling
app.use(function (err, req, res, next) {
    console.log(err);
    res.status(433).send({ error: err.message })
});

//listen for requests
app.listen(process.env.port || 4000, function () {
    console.log('listening to requests to port 4000');
});
