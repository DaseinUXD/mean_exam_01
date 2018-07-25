const express = require('express'),
    path = require('path'),
    mongoose = require('./server/config/mongoose'),
    bodyParser = require('body-parser'),
    session = require('express-session');

let port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'public', 'dist', 'public')));

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}

}));

require('./server/config/routes.js')(app);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
// module.exports = app;
