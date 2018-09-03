var express = require('express');
var router = express.Router();
Customer = require('../models/customer.model');


/* GET ALL Customers */
router.get('/customers', (req, res) => {
    console.log("getting customers list");
    Customer.getCustomers((err, customers) => {
        if (err) throw err;
        res.json(customers);
    });
});

/* GET SINGLE Customer BY ID */
router.get('/customer/:id', function (req, res, next) {
    Customer.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* ADD Customer */
router.post('/customer', function (req, res, next) {
    Customer.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE Customer */
router.put('/customer/:id', function (req, res, next) {
    Customer.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE Customer */
router.delete('/customer/:id', function (req, res, next) {
    Customer.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;