var MongoClient = require('mongodb').MongoClient

function mongodb_get_Order(){
    //Mongodb connection 
    //code to insertOne data
    //return success
    console.log("connected to Mongodb and creating a order")
    return new Promise((resolve,reject) => {
        var conn = new MongoClient("mongodb://127.0.0.1:27017/food_to_order")
        console.log("connect to mongoDB")
        var myDB = conn.db()
        var coll = myDB.collection('orders')
        var order= coll.find().toArray()
        console.log(order)
        resolve(order)
    })
    
    }

function mongodb_add_Order(order){
    //Mongodb connection 
    //code to insertOne data
    //return success
    console.log("connected to Mongodb and creating a order")
    return new Promise((resolve,reject) => {
        try{
        var conn = new MongoClient("mongodb://127.0.0.1:27017/food_to_order")
        console.log("connect to mongoDB")
        var myDB = conn.db()
        var coll = myDB.collection('orders')
        coll.insertOne(order).then(function(result){
            console.log('insertOne Result: ' +JSON.stringify(result))
            resolve(result)
        })
        } 
        catch(error)  {
            reject(error)
        }
        
    })
}

function mongodb_getById_Order(order){
    console.log("connected to MongoDB and find a order")
    return new Promise((resolve,reject) => {
        try{
            var conn = new MongoClient("mongodb://127.0.0.1:27017/food_to_order")
            console.log("connect to mongoDB")
            var myDB = conn.db()
            var coll = myDB.collection('orders')
            const filter = { _id: order._id} 
            coll.findOne(filter,order).then(function(result){
                console.log("findOne result"+JSON.stringify(result))
                resolve(result)
            })
            
        }catch(error){
            reject(error)
        }
        finally{
            
        }
    })    
}

function mongodb_update_Order(order){
    console.log("connected to MongoDB and creating a order")
    return new Promise((resolve,reject) => {
        try{
            var conn = new MongoClient("mongodb://127.0.0.1:27017/food_to_order")
            console.log("connect to mongoDB")
            var myDB = conn.db()
            var coll = myDB.collection('orders')
            const filter = { _id: order._id} 
            coll.replaceOne(filter,order).then(function(result) {
            
                console.log("replaceOne result: "+JSON.stringify(result))
                resolve(result)
            })
        }catch(error){

        }
        finally{
            
        }
    })
}

function mongodb_delete_Order(order){
    console.log("connected to MongoDB and creating a order")
    return new Promise((resolve,reject) => {
        try{
            var conn = new MongoClient("mongodb://127.0.0.1:27017/food_to_order")
            console.log("connect to mongoDB")
            var myDB = conn.db()
            var coll = myDB.collection('orders')
            const filter = { _id: order._id} 
            coll.deleteOne(filter,order).then(function(result) {
            
                console.log("replaceOne result: "+JSON.stringify(result))
                resolve(result)
            })
        }catch(error){

        }
        finally{
            
        }
    })

}
module.exports={mongodb_add_Order,mongodb_get_Order,
    mongodb_update_Order,mongodb_delete_Order,
    mongodb_getById_Order
}
