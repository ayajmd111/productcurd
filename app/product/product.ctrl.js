var config = require("../../config/config");
var product = require("./productSchema.model");
var productSchema = require('mongoose').model('products');

product.register = (req, res) => {
    console.log(req.body)

    var productObj = new productSchema(req.body)
    productObj.save(function (err, results) {
        if (!err) {
            console.log(results)
            res.json(results)

        }
        else {
            console.log(results)
        }
     })
}

product.productList = (req, res) => {
    productSchema.find({}, function (err, doc) {
        if (!err) {
            res.json(doc)
        }
        else {
            res.json(err)

        }

    })
}

product.removeUser =(req,res) => {
    console.log(req.body.userId)

    productSchema.remove({_id:req.body.userId}, function(err,doc){
        if(!err){
            res.json(doc)
        }
      else{
            res.json(err)
        }
    })
}
product.updateUserData=(req,res)=>
{
var params=req.body;

productSchema.update({_id:params.userId},{$set:params.userDate} ,function (err, doc) {
        
                if (!err) {
                    res.json(doc)
                }
                else {
                    res.json(err)
        
                }
        
            })


}
module.exports = product;