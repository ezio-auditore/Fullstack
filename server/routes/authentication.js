/**
 * Created by tonyStark on 12/1/2016.
 */
 var User = require("../models/users");
module.exports = function(router){
router.get('/register',function(req,res){
    res.render('partials/register');
});
router.get('/login',function(req,res){
    res.render('partials/login');
});
router.post('/register',function(req,res){
    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var password= req.body.password;
    var password2= req.body.password2;
    
    //validation
    req.checkBody('name','Name is required').notEmpty();
    req.checkBody('username','User Name is required').notEmpty();
    req.checkBody('email','Email is required').notEmpty();
    req.checkBody('email','Email is not valid').isEmail();
    req.checkBody('password','Password is required').notEmpty();
    req.checkBody('password2','Passwords donot match ').equals(req.body.password);
    var errors = req.validationErrors();
    if(errors){
        console.log("Error in register");
        res.render('partials/register',{
            errors:errors
        })
    }
    else{
        console.log("Passed");
        var newUser = new User({
            name :name,
            email : email,
            username: username,
            password:password
        });
        User.createUser(newUser,function(err,user){
            if(err){
                throw err;
            }
            else{
            console.log(user);
            req.flash('success_msg','You are registered and now can login');
            res.redirect('/auth/login');
            }
        })
    }
    
});
router.post('/login',function(req,res){
    var username = req.body.username;
    var password= req.body.password;
    var password2= req.body.password2;
     req.checkBody('username','User Name is required').notEmpty();
    req.checkBody('password','Password is required').notEmpty();
    req.checkBody('password2','Passwords donot match ').equals(req.body.password);
    var errors = req.validationErrors();
    if(errors){
        console.log("Error in register");
        res.render('partials/login',{
            errors:errors
        })
    }
    else{
        console.log("Passed");
        var newUser = new User({
            username: username,
            password:password
        });

    }
});

}