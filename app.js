// path module from nodejs
const path = require('path');

const express = require('express');
const app = express();

// add body parser
const bodyParser = require('body-parser');

//routes imported
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded( {extended: false}));

// static serving of css files: built-in static module of express
app.use(express.static(path.join(__dirname, 'public')));

// routes assigned
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// route for Error Page. Any route that isn't defined.
app.use( (req, res, next) => {
    res.status(400).sendFile(path.join(__dirname, 'views', '404.html'));
});

// create a server and listen.
app.listen(5000);

