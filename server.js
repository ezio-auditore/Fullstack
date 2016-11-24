/**
 * Created by tonyStark on 11/21/2016.
 */
var express = require('express');
var app = express();
var http =require('http').Server(app);
var io =require('socket.io')(http);
var path = require('path');
var config = require('.//server/config');
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');

app.set('view engine','ejs');
app.set('views',path.resolve(__dirname,'client','views'));


app.use(express.static(path.resolve(__dirname,'client')));
app.use(bodyParser.json());
/*app.use(morgan());*/
io.on('connection',function(socket){
    console.log('User has connected');
    socket.on('disconnect',function(){
        console.log("user has disconnected");
    })
})
app.get('/*',function(req,res){
    res.render('index.ejs');
});
var api = express.Router();
require('./server/routes/api')(api);
app.use('/api',api)

http.listen(port,function(err){
    if(err)
        console.log(err);
    console.log('Listening on port 3000');
});

mongoose.connect(config.url,function(err){
    if(err){
        console.log('error connecting to db');
    }
    console.log('connected to customers db');
})