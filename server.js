/**
 * Created by tonyStark on 11/21/2016.
 */
var express = require('express');
var app = express();
var http =require('http').Server(app);
/*var io =require('socket.io')(http);*/
var path = require('path');
var config = require('.//server/config');
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
/*var handelbars = require('handlebars');*/
var exphbs = require('express-handlebars');

app.set('views',path.resolve(__dirname,'views'));
app.use(express.static(path.resolve(__dirname,'client')));
app.engine('hbs', exphbs({defaultLayout: 'main',extname:'.hbs'}));
app.set('view engine', 'hbs');
/*app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');*/
app.get('/',function(req,res){
    res.render('index');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret : 'adadnald65a4d68ad',
    saveUninitialized : true,
    resave : true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
var expressValidator = require('express-validator');
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.')
            , root    = namespace.shift()
            , formParam = root;

        while(namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param : formParam,
            msg   : msg,
            value : value
        };
    }
}));
app.use(function(req,res,next){
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

/*app.use(morgan());*/
/*io.on('connection',function(socket){
 console.log('User has connected');
 messages.forEach(function(data){
 socket.emit('messages',data);
 });
 socket.on('disconnect',function(){
 console.log("user has disconnected");
 })
 })*/

var api = express.Router();
require('./server/routes/api')(api);
app.use('/api',api);



var loginApi = express.Router();
require('./server/routes/authentication.js')(loginApi);
app.use('/auth',loginApi);


/*var loginDbConnection = mongoose.createConnection(config.loginUrl,function(err){
    if(err){
        console.log('error connecting to login db');
    }
    console.log('connected to Login Users db');
});
*/

app.listen(port,function(err){
    if(err)
        console.log(err);
    console.log('Listening on port 3000');
});

