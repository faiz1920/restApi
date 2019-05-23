//Import Modules/Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const port = 3000;
const app = express();

// const favicon = require('serve-favicon');
// const logger = require('morgan');


// Import Models
User = require('./models/user.model');

//Import Routes
const userRoute = require('./routes/user.route');



// Middleware
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

app.use('/api', userRoute);




// Database Connection
//Set up default mongoose connection
// const mongoDBUrl = 'mongodb://localhost/test';
const mongoDBUrl
 = 'mongodb+srv://developer:teamKryoTek.007@kryotek-mongo-cbqnm.mongodb.net/demo?retryWrites=true';
mongoose.connect(mongoDBUrl);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('connected', console.info.bind(console, `MongoDB Connected to ${mongoDBUrl}`));
db.on('error', console.error.bind(console, 'MongoDB connection error!'));



app.listen(port, () => {
    console.log("Node Server Running on Port : " + port);
});
// module.exports = app;