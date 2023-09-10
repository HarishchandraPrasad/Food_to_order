const order_model = require("../models/orders.model.js");
const utility = require("../utility/util.js")
const json2xls = require('json2xls');
const fs = require('fs');
function getOrders(req,res,next){
//    console.log("About to call mongodb method to add order")
//    var result = order_model.mongodb_add_order()
//      return res.send(result)

        order_model.mongodb_get_Order()
         .then(
            function (order){
                const objArr = order
                objArr.forEach(o => {
                    utility.renamekey(o,"_id","id")
                })
                res.send(order)
            },
            function(err){
                console.log(err)
            }
         )
}

var createOrder=(req, res) => {
    // Validate request
    if(!req.body.restaurant_id){
        res.status(400).send({ message : "content can not be empty!"})
        return
    }

    const order = {
        _id:req.body.id,
        restaurant_id:req.body.restaurant_id,
        order_date: req.body.order_date,
        dishes_id: req.body.dishes_id,
        
        num_of_dishes1:req.body.num_of_dishes1,
        user_id:req.body.user_id,
        order_total:req.body.order_total,
        payment_mode:req.body.payment_mode
    }

    order_model.mongodb_add_Order(order)
        .then(data=> {
            console.log("controller recived : "+JSON.stringify(data))
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message : 
                err.message || "send error occured while creating the order"
            })
        })
    
}

var getByIdOrder = (req,res) => {
    if(!req.param){
        req.status(400).send({ message : "Content can not be empty!"})
        return
    }
    console.log("req id"+req.params.id)
    var oid = parseInt(req.params.id)
    

    const order = {
        _id:oid,
        
    }

    order_model.mongodb_getById_Order(order)
        .then(data => {
            utility.renamekey(data,"_id","id")
            console.log("controller getById recived: "+JSON.stringify(data))
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message:
                err.message || "Some erroe occured while creating the order"
            })
        })
}
var updateOrder = (req,res) =>{
    console.log("req id"+req.params.id)
    var oid = parseInt(req.params.id)
    if(!req.param){
        req.status(400).send({ message : "Content can not be empty!"})
        return
    }

    const order = {
        _id:oid,
        restaurant_id:req.body.restaurant_id,
        order_date: req.body.order_date,
        dishes_id: req.body.dishes_id,
        
        num_of_dishes1:req.body.num_of_dishes1,
        user_id:req.body.user_id,
        order_total:req.body.order_total,
        payment_mode:req.body.payment_mode
    }

    order_model.mongodb_update_Order(order)
        .then(data => {
            console.log("controller update recived: "+JSON.stringify(data))
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message:
                err.message || "Some erroe occured while creating the order"
            })
        })
}

var deleteOrder = (req,res) => {
    console.log("req id"+req.params.id)
    var oid = parseInt(req.params.id)
    if(!req.param){
        req.status(400).send({ message : "Content can not be empty!"})
        return
    }
    const order = {
        _id:oid,
        
    }

    order_model.mongodb_delete_Order(order)
        .then(data => {
            console.log("controller update recived: "+JSON.stringify(data))
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message:
                err.message || "Some erroe occured while creating the order"
            })
        })


}

function convertExcel(req,res,next){
    //    console.log("About to call mongodb method to add order")
    //    var result = order_model.mongodb_add_order()
    //      return res.send(result)
    
            order_model.mongodb_get_Order()
             .then(
                function (order){
                    const objArr = order
                    objArr.forEach(o => {
                        utility.renamekey(o,"_id","id")
                    })
                    const xls = json2xls(order);

    
                        const excelFilePath = 'output.xlsx';

    
                    fs.writeFileSync(excelFilePath, xls, 'binary');

    
                    res.download(excelFilePath, 'output.xlsx', (err) => {
                                if (err) {
                                        console.error('Error sending the file:', err);
                                } else {
        
                                fs.unlinkSync(excelFilePath);
                                }
                            })
                    
                },
                function(err){
                    console.log(err)
                }
             )
    }


module.exports={
    createOrder,getOrders,updateOrder,deleteOrder,getByIdOrder,convertExcel
}