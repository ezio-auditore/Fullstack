/**
 * Created by tonyStark on 12/1/2016.
 */
var mongoose = require('mongoose');
var bcrypt= require('bcryptjs');
var config = require('../config');
var userDbConnection = mongoose.createConnection(config.loginUrl,function(err){
    if(err){
        console.log('error connecting to login db');
    }
    console.log('connected to Login Users db');
});

var UserSchema = mongoose.Schema({
   username : {
       type: String,
       index : true,
       /*unique : true*/
   } ,
   password : {
       type: String
   },
   email : {
       type: String,
       unique : true
   },
   name : {
       type: String
   }
});

var User = module.exports = userDbConnection.model('User',UserSchema);

module.exports.createUser = function(newUser,callback){
    bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("newUser.password", salt, function(err, hash) {
        if(err){
            throw err;
        }
        else{
        newUser.password = hash;
        newUser.save(callback);
        }
    });
});
}
