var MongoClient = require('mongodb').MongoClient

function mongodb_get_restaurant(){
    //Mongodb connection 
    //code to insertOne data
    //return success
    console.log("connected to Mongodb and creating a restaurant")
    return new Promise((resolve,reject) => {
        var conn = new MongoClient("mongodb://127.0.0.1:27017/food_to_order")
        console.log("connect to mongoDB")
        var myDB = conn.db()
        var coll = myDB.collection('restaurants')
        var restaurant= coll.find().toArray()
        console.log(restaurant)
        resolve(restaurant)
    })
    
    }

function mongodb_add_restaurant(restaurant){
    //Mongodb connection 
    //code to insertOne data
    //return success
    console.log("connected to Mongodb and creating a restaurant")
    return new Promise((resolve,reject) => {
        try{
        var conn = new MongoClient("mongodb://127.0.0.1:27017/food_to_order")
        console.log("connect to mongoDB")
        var myDB = conn.db()
        var coll = myDB.collection('restaurants')
        coll.insertOne(restaurant).then(function(result){
            console.log('insertOne Result: ' +JSON.stringify(result))
            resolve(result)
        })
        } 
        catch(error)  {
            reject(error)
        }
        
    })
}

function mongodb_getById_restaurant(restaurant){
    console.log("connected to MongoDB and find a restaurant")
    return new Promise((resolve,reject) => {
        try{
            var conn = new MongoClient("mongodb://127.0.0.1:27017/food_to_order")
            console.log("connect to mongoDB")
            var myDB = conn.db()
            var coll = myDB.collection('restaurants')
            const filter = { _id: restaurant._id} 
            coll.findOne(filter,restaurant).then(function(result){
                console.log("findOne result"+JSON.stringify(result))
                resolve(result)
            })
            
        }catch(error){

        }
        finally{
            
        }
    })    
}

function mongodb_update_restaurant(restaurant){
    console.log("connected to MongoDB and creating a restaurant")
    return new Promise((resolve,reject) => {
        try{
            var conn = new MongoClient("mongodb://127.0.0.1:27017/food_to_order")
            console.log("connect to mongoDB")
            var myDB = conn.db()
            var coll = myDB.collection('restaurants')
            const filter = { _id: restaurant._id} 
            coll.replaceOne(filter,restaurant).then(function(result) {
            
                console.log("replaceOne result: "+JSON.stringify(result))
                resolve(result)
            })
        }catch(error){

        }
        finally{
            
        }
    })
}

function mongodb_delete_restaurant(restaurant){
    console.log("connected to MongoDB and creating a restaurant")
    return new Promise((resolve,reject) => {
        try{
            var conn = new MongoClient("mongodb://127.0.0.1:27017/food_to_order")
            console.log("connect to mongoDB")
            var myDB = conn.db()
            var coll = myDB.collection('restaurants')
            const filter = { _id: restaurant._id} 
            coll.deleteOne(filter,restaurant).then(function(result) {
            
                console.log("replaceOne result: "+JSON.stringify(result))
                resolve(result)
            })
        }catch(error){

        }
        finally{
            
        }
    })

}
module.exports={mongodb_add_restaurant,mongodb_get_restaurant,
    mongodb_update_restaurant,mongodb_delete_restaurant,
    mongodb_getById_restaurant
}
