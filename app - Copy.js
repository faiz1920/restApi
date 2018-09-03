const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
const router = express.Router();


// Import Models
const Customer = require('./models/customer.model');


// Database
//Import the mongoose module
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/test';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('open', console.error.bind(console, `MongoDB Connected to ${mongoDB}`));
db.on('error', console.error.bind(console, 'MongoDB connection error!'));

// Middlwware
app.use(bodyParser.urlencoded({
    extended: true
}));

// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use(cors());

let dummyData = [{
        "_id": 10001,
        "first_name": "Faiz",
        "last_name": "Ansari"
    },
    {
        "_id": 10002,
        "first_name": "Faiz",
        "last_name": "Ansari"
    },
    {
        "_id": 10003,
        "first_name": "Faiz",
        "last_name": "Ansari"
    }
]


// // Add headers
// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });



app.get('/', (req, res) => res.send('Hello World!'))
app.get('/getuser', (req, res) => res.send(JSON.stringify(dummyData)))
app.get('/getCustomerList', (req, res) => {
    console.log("getCustomerList");
    db.collection('customers_detail').find({}).toArray((err, customer) => {
        if (err) throw err;
        console.log(customer);
        res.send(customer);
        db.close();
    });
})
app.get('/getCustomerDetails', (req, res) => {
    console.log("getCustomerList");
    db.collection('customers_detail').find({}).toArray((err, customer) => {
        if (err) throw err;
        console.log(customer);
        res.send(customer);
        db.close();
    });
})

app.listen(3000, () => console.log('Node App listening on port 3000!'))