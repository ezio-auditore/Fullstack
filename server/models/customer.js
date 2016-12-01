var mongoose = require("mongoose");
var config =require('..//config.js');
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
var customerDbConnection= mongoose.createConnection(config.customerUrl,function(err){
    if(err){
        console.log('error connecting to login db');
    }
    console.log('connected to Customers Users db');
});

module.exports = customerDbConnection.model('Customer',customer);