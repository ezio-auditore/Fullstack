var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var customer = new Schema({
    firstName : String,
    lastName : String,
    phone : String,
    address: {
        street : String,
        city :String,
        state : String,
        pin:String
    }
});

module.exports = mongoose.model('Customer',customer);