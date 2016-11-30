/**
 * Created by tonyStark on 11/23/2016.
 */
var Customer = require('../models/customer')
module.exports = function(router){
    router.post('/customers',function(req,res){
        var customer = new Customer();
        customer.firstName = req.body.firstName;
        customer.lastName = req.body.lastName;
        customer.phone = req.body.phone;
        customer.address.street =req.body.address.street;
        customer.address.state =req.body.address.state;
        customer.address.pin =req.body.address.pin;
        customer.address.city =req.body.address.city;

        customer.save(function(err,data) {
            if (err) {
                res.json({'msg':err});
            }
            res.json(data);
        });
    });

    router.get('/customers',function(req,res){
       Customer.find({},function(err,data){
           if(err)
                res.json({'msg':err});
           else
                res.json(data);
                console.log(data);
       });
    });
    router.get('/customers/:id',function(req,res){
   Customer.findOne({_id : req.params.id},function(err,data){
        if(err)
            res.json({'msg':'User not found'});
       res.json({'result':data?data:'user not found'});
            });
    })
    router.delete('/customers/:id',function(req,res){
        Customer.remove({_id : req.params.id},function(err){
            res.json({'result' : err?'error':'ok'});
        })
    });
    router.post('/customers/:id',function(req,res){
        Customer.findOne({_id:req.params.id},function(err,data){
            if(err){
                res.json(err);
            }
            var  customer = data;
            customer.firstName = req.body.firstName;
            customer.lastName = req.body.lastName;
            customer.phone = req.body.phone;
            if(req.body.address){
                customer.address.street =req.body.address.street;
                customer.address.state =req.body.address.state;
                customer.address.pin =req.body.address.pin;
                customer.address.city =req.body.address.city;
            }
            customer.save(function(err,data){
                if(err)
                    res.json(err);
                res.json(data);
            });

        })
    })

}