'use strict';


// dependencies
// =============================================================
const express = require('express'),
      exphbs = require('express-handlebars'),
      bodyParser = require('body-parser'),
      logger = require('morgan'),
      mongoose = require('mongoose'),
      methodOverride = require('method-override');

// set up express app
// =============================================================
const PORT = process.env.PORT || 8000;
let app = express();

//DB config
const db = require('./config/database');

app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended:true }))
    .use(bodyParser.text())
    .use(bodyParser.json({ type: 'application/vnd.api+json' }))
    .use(methodOverride('_method'))
    .use(logger('dev'))
    .use(express.static(__dirname + '/public'))
    .engine('handlebars', exphbs({ defaultLayout: 'main' }))
    .set('view engine', 'handlebars')
    .use(require('./controllers'));

// configure mongoose and start the server
// =============================================================
// set mongoose to leverage promises
//Map global promise - get rid of warning
mongoose.Promise = global.Promise;



//const dbURI = process.env.MONGODB_URI || "mongodb://localhost:27017/newsArticles";
//const dbURI = process.env.MONGODB_URI || "mongodb://localhost:8000/newsArticles";

// Database configuration with mongoose
mongoose.set('useCreateIndex', true)
//Connect to mongoose
mongoose.connect(db.mongoURI, {
    useNewUrlParser: true
})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));
    

//const db = mongoose.connection;

// Show any mongoose errors
//db.on("error", function(error) {
//    console.log("Mongoose Error: ", error);
//});

// Once logged in to the db through mongoose, log a success message
//db.once("open", function() {
 //   console.log("Mongoose connection successful.");
    // start the server, listen on port 3000
//    app.listen(PORT, function() {
//        console.log("App running on port " + PORT);
 //   });
//});

module.exports = app;
    
