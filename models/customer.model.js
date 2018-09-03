const mongoose = require('mongoose');
const customerSchema = mongoose.Schema({
    _id: {
        type: Number,
        require: true
    },
    first_name: String,
    last_name: String,
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
var Customer = module.exports = mongoose.model('Customer', customerSchema);

//Get All Customers
module.exports.getCustomers = function (callback, limit) {
    Customer.find(callback).limit(limit);
}