var express = require('express');
var router = express.Router();
User = require('../models/user.model');


/* GET ALL Users */
router.get('/users', (req, res) => {
    console.log("getting users list");
    User.getUsers((err, users) => {
        if (err) throw err;
        res.json(users);
    });
});

/* GET SINGLE User BY ID */
router.get('/user/:id', function (req, res, next) {
    User.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* ADD User */
router.post('/user', function (req, res, next) {
    User.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE User */
router.put('/user/:id', function (req, res, next) {
    User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE User */
router.delete('/user/:id', function (req, res, next) {
    User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;