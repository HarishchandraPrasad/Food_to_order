const restaurant_model = require("../models/restaurants.model.js");
const utility = require("../utility/util.js")
function getRestaurants(req,res,next){
//    console.log("About to call mongodb method to add restaurant")
//    var result = restaurant_model.mongodb_add_restaurant()
//      return res.send(result)

        restaurant_model.mongodb_get_restaurant()
         .then(
            function (restaurant){
                const objArr = restaurant
                objArr.forEach(o => {
                    utility.renamekey(o,"_id","id")
                })
                res.send(restaurant)
            },
            function(err){
                console.log(err)
            }
         )
}

var createRestaurant=(req, res) => {
    // Validate request
    if(!req.body.r_Name){
        res.status(400).send({ message : "content can not be empty!"})
        return
    }

    const restaurant = {
        _id:req.body.id,
        r_owner_id:req.body.r_owner_id,
        r_Name: req.body.r_Name,
        r_Img_Path : req.body.r_Img_Path,
        
        r_Addresses:req.body.r_Addresses,
        r_dishes:req.body.r_dishes
    }

    restaurant_model.mongodb_add_restaurant(restaurant)
        .then(data=> {
            console.log("controller recived : "+JSON.stringify(data))
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message : 
                err.message || "send error occured while creating the Restaurant"
            })
        })
    
}

var getByIdRestaurant = (req,res) => {
    console.log("req id"+req.params.id)
    var rid = parseInt(req.params.id)
    if(!req.param){
        req.status(400).send({ message : "Content can not be empty!"})
        return
    }

    const restaurant = {
        _id:rid,
        
    }

    restaurant_model.mongodb_getById_restaurant(restaurant)
        .then(data => {
            utility.renamekey(data,"_id","id")
            console.log("controller getById recived: "+JSON.stringify(data))
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message:
                err.message || "Some erroe occured while creating the Restaurant"
            })
        })
}
var updateRestaurant = (req,res) =>{
    console.log("req id"+req.params.id)
    var rid = parseInt(req.params.id)
    if(!req.param){
        req.status(400).send({ message : "Content can not be empty!"})
        return
    }

    const restaurant = {
        _id:rid,
        r_owner_id:req.body.r_owner_id,
        r_Name: req.body.r_Name,
        r_Img_Path : req.body.r_Img_Path,
        
        r_Addresses:req.body.r_Addresses,
        r_dishes:req.body.r_dishes
    }

    restaurant_model.mongodb_update_restaurant(restaurant)
        .then(data => {
            console.log("controller update recived: "+JSON.stringify(data))
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message:
                err.message || "Some erroe occured while creating the Restaurant"
            })
        })
}

var deleteRestaurant = (req,res) => {
    console.log("req id"+req.params.id)
    var rid = parseInt(req.params.id)
    if(!req.param){
        req.status(400).send({ message : "Content can not be empty!"})
        return
    }
    const restaurant = {
        _id:rid,
        
    }

    restaurant_model.mongodb_delete_restaurant(restaurant)
        .then(data => {
            console.log("controller update recived: "+JSON.stringify(data))
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message:
                err.message || "Some erroe occured while creating the Restaurant"
            })
        })


}


module.exports={
    createRestaurant,getRestaurants,updateRestaurant,deleteRestaurant,getByIdRestaurant
}