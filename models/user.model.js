const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    _id: {
        type: Number,
        require: true
    },
    firstName: String,
    lastName: String,
    contact: {
        country_code: String,
        number: {
            type: Number
        }
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
var User = module.exports = mongoose.model('User', userSchema);

//Get All Users
module.exports.getUsers = function (callback, limit) {
    User.find(callback).limit(limit);
}