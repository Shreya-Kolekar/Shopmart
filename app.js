// path module from nodejs
const path = require('path');

// import controller for error page
const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const express = require('express');
const app = express();

// set templating engine: ejs
app.set('view engine', 'ejs');
app.set('views', 'views')

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
app.use(errorController.get404);

// call sequelize; sync method syncs app models to database
sequelize.sync()
    .then(result => {
        // console.log(result);
        // create a server and listen.
        app.listen(5000);
    })
    .catch(err => {
        console.log(err);
    })



