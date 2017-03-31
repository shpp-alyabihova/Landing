const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/configs/config.json')[env];

const logger = require('./custom_modules/logger.js');
const db = require('./mongo/db.js');

const app = express();
app.use(cookieParser());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    req.forceLang = req.cookies.forceLang || 'en';
    next();
});

app.get('/', function (req, res, next) {
    serveIndex(req, res, next);
});


app.use((req, res, next)=> {
    let err = new Error('Not Found');
    err.status = err.status || 404;
    next(err);
});



// error handlers

// development error handler
// print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// without stacktrace
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

mongoose.connect(config.mongoConnection.uri, config.mongoConnection.options, (err)=> {
    if (err) {
        let errMessage = err && err.message;
        logger.error(`On connect to mongodb catch error: ${errMessage}`);
    } else {
        app.listen(config.port, ()=> {
            logger.info(`listening on : ${config.port}`);
        });
    }
});


function serveIndex(req, res, next) {
    db.getLanding(config.pageName)
        .then((landing)=> {
            res.render('index', {
                language: req.forceLang,
                landing: landing
            })
        })
        .catch((err)=> {
            let errMessage = err && err.message;
            err.status = err.status || 500;
            res.render('error', {
                message: errMessage,
                error: err
            })
        });
}