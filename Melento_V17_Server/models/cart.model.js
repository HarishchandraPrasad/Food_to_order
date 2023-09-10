var MongoClient = require('mongodb').MongoClient

function mongodb_get_cart(){
    //Mongodb connection 
    //code to insertOne data
    //return success
    console.log("connected to Mongodb and creating a cart")
    return new Promise((resolve,reject) => {
        var conn = new MongoClient("mongodb://127.0.0.1:27017/food_to_order")
        console.log("connect to mongoDB")
        var myDB = conn.db()
        var coll = myDB.collection('cart')
        var cart= coll.find().toArray()
        console.log(cart)
        resolve(cart)
    })
    
    }

function mongodb_add_cart(cart){
    //Mongodb connection 
    //code to insertOne data
    //return success
    console.log("connected to Mongodb and creating a cart")
    return new Promise((resolve,reject) => {
        try{
        var conn = new MongoClient("mongodb://127.0.0.1:27017/food_to_order")
        console.log("connect to mongoDB")
        var myDB = conn.db()
        var coll = myDB.collection('cart')
        coll.insertOne(cart).then(function(result){
            console.log('insertOne Result: ' +JSON.stringify(result))
            resolve(result)
        })
        } 
        catch(error)  {
            reject(error)
        }
        
    })
}

function mongodb_getById_cart(cart){
    console.log("connected to MongoDB and find a cart")
    return new Promise((resolve,reject) => {
        try{
            var conn = new MongoClient("mongodb://127.0.0.1:27017/food_to_order")
            console.log("connect to mongoDB")
            var myDB = conn.db()
            var coll = myDB.collection('cart')
            const filter = { _id: cart._id} 
            coll.findOne(filter,cart).then(function(result){
                console.log("findOne result"+JSON.stringify(result))
                resolve(result)
            })
            
        }catch(error){

        }
        finally{
            
        }
    })    
}

function mongodb_update_cart(cart){
    console.log("connected to MongoDB and creating a cart")
    return new Promise((resolve,reject) => {
        try{
            var conn = new MongoClient("mongodb://127.0.0.1:27017/food_to_order")
            console.log("connect to mongoDB")
            var myDB = conn.db()
            var coll = myDB.collection('cart')
            const filter = { _id: cart._id} 
            coll.replaceOne(filter,cart).then(function(result) {
            
                console.log("replaceOne result: "+JSON.stringify(result))
                resolve(result)
            })
        }catch(error){

        }
        finally{
            
        }
    })
}

function mongodb_delete_cart(cart){
    console.log("connected to MongoDB and creating a cart")
    return new Promise((resolve,reject) => {
        try{
            var conn = new MongoClient("mongodb://127.0.0.1:27017/food_to_order")
            console.log("connect to mongoDB")
            var myDB = conn.db()
            var coll = myDB.collection('cart')
            const filter = { _id: cart._id} 
            coll.deleteOne(filter,cart).then(function(result) {
            
                console.log("replaceOne result: "+JSON.stringify(result))
                resolve(result)
            })
        }catch(error){

        }
        finally{
            
        }
    })

}
module.exports={mongodb_add_cart,mongodb_get_cart,
    mongodb_update_cart,mongodb_delete_cart,
    mongodb_getById_cart
}
