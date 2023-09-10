const cart_model = require("../models/cart.model.js")

const utility = require("../utility/util.js")
function getCarts(req,res,next){
//    console.log("About to call mongodb method to add cart")
//    var result = cart_model.mongodb_add_cart()
//      return res.send(result)

        cart_model.mongodb_get_cart()
         .then(
            function (cart){
                const objArr = cart
                objArr.forEach(o => {
                    utility.renamekey(o,"_id","id")
                })
                res.send(cart)
            },
            function(err){
                console.log(err)
            }
         )
}

var createCart=(req, res) => {
    // Validate request
    if(!req.body.user_id){
        res.status(400).send({ message : "content can not be empty!"})
        return
    }

    const cart = {
        _id:req.body.id,
        user_id:req.body.user_id,
        dish_ids: req.body.dish_ids,
        number_of_each_dish : req.body.number_of_each_dish,
        cart_restaurant_id:req.body.cart_restaurant_id,
        total:req.body.total
       
    }

    cart_model.mongodb_add_cart(cart)
        .then(data=> {
            console.log("controller recived : "+JSON.stringify(data))
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message : 
                err.message || "send error occured while creating the cart"
            })
        })
    
}

var getByIdCart = (req,res) => {
    console.log("req id"+req.params.id)
    var cid = parseInt(req.params.id)
    if(!req.param){
        req.status(400).send({ message : "Content can not be empty!"})
        return
    }

    const cart = {
        _id:cid,
        
    }

    cart_model.mongodb_getById_cart(cart)
        .then(data => {
            utility.renamekey(data,"_id","id")
            console.log("controller getById recived: "+JSON.stringify(data))
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message:
                err.message || "Some erroe occured while creating the cart"
            })
        })
}
var updateCart = (req,res) =>{
    console.log("req id"+req.params.id)
    var cid = parseInt(req.params.id)
    if(!req.param){
        req.status(400).send({ message : "Content can not be empty!"})
        return
    }

    const cart = {
        _id:cid,
        
        user_id:req.body.user_id,
        dish_ids: req.body.dish_ids,
        number_of_each_dish : req.body.number_of_each_dish,
        cart_restaurant_id:req.body.cart_restaurant_id,    
        total:req.body.total
    }

    cart_model.mongodb_update_cart(cart)
        .then(data => {
            console.log("controller update recived: "+JSON.stringify(data))
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message:
                err.message || "Some erroe occured while creating the cart"
            })
        })
}

var deleteCart = (req,res) => {
    console.log("req id"+req.params.id)
    var cid = parseInt(req.params.id)
    if(!req.param){
        req.status(400).send({ message : "Content can not be empty!"})
        return
    }
    const cart = {
        _id:cid,
        
    }

    cart_model.mongodb_delete_cart(cart)
        .then(data => {
            console.log("controller update recived: "+JSON.stringify(data))
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message:
                err.message || "Some erroe occured while creating the cart"
            })
        })


}


module.exports={
    createCart,getCarts,updateCart,deleteCart,getByIdCart
}