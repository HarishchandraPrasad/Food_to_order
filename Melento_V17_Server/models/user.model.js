var MongoClient = require('mongodb').MongoClient

function mongodb_get_users(){
    return new Promise((resolve,reject) => {
        var conn = new MongoClient("mongodb://127.0.0.1:27017/food_to_order")
        console.log("connect to mongoDB")
        var myDB = conn.db()
        var coll = myDB.collection('users')
        var users= coll.find().toArray()
        console.log(users)
        resolve(users)
    })
}

function mongodb_add_user(user){
    console.log("connected to Mongodb and creating a user")
    return new Promise((resolve,reject) => {
        try{
        var conn = new MongoClient("mongodb://127.0.0.1:27017/food_to_order")
        console.log("connect to mongoDB")
        var myDB = conn.db()
        var coll = myDB.collection('users')
        coll.insertOne(user).then(function(result){
            console.log('insertOne Result: ' +JSON.stringify(result))
            resolve(result)
        })
        } 
        catch(error)  {
            reject(error)
        }
        
    })
}

function mongodb_getById_User(us){
    console.log("connected to MongoDB and find a user")
    return new Promise((resolve,reject) => {
        try{
            var conn = new MongoClient("mongodb://127.0.0.1:27017/food_to_order")
            console.log("connect to mongoDB")
            var myDB = conn.db()
            var coll = myDB.collection('users')
            const filter = { _id: us._id} 
            coll.findOne(filter,us).then(function(result){
                console.log("findOne result"+JSON.stringify(result))
                resolve(result)
            })
        }catch(error){

        }
        finally{
            
        }
    })    
}

function mongodb_update_user(user){
    console.log("connected to MongoDB and creating a user")
    return new Promise((resolve,reject) => {
        try{
            var conn = new MongoClient("mongodb://127.0.0.1:27017/food_to_order")
            console.log("connect to mongoDB")
            var myDB = conn.db()
            var coll = myDB.collection('users')
            const filter = { _id: user._id} 
            coll.replaceOne(filter,user).then(function(result) {
            
                console.log("replaceOne result: "+JSON.stringify(result))
                resolve(result)
            })
        }catch(error){

        }
        finally{
            
        }
    })
}

function mongodb_delete_user(user){
    console.log("connected to MongoDB and creating a user")
    return new Promise((resolve,reject) => {
        try{
            var conn = new MongoClient("mongodb://127.0.0.1:27017/food_to_order")
            console.log("connect to mongoDB")
            var myDB = conn.db()
            var coll = myDB.collection('users')
            const filter = { _id: user._id} 
            coll.deleteOne(filter,user).then(function(result) {
            
                console.log("replaceOne result: "+JSON.stringify(result))
                resolve(result)
            })
        }catch(error){

        }
        finally{
            
        }
    })

}

function mongodb_count(user){
    console.log("connected to Mongodb ")
    return new Promise((resolve,reject) => {
        try{
        var conn = new MongoClient("mongodb://127.0.0.1:27017/food_to_order")
        console.log("connect to mongoDB")
        var myDB = conn.db()
        var coll = myDB.collection('users')
        const filter = { role: user.role} 
        const users = coll.find({role:user.role}).toArray()
            
            resolve(users)
        } 
        catch(error)  {
            reject(error)
        }
        
    })
}

module.exports = {mongodb_get_users,mongodb_add_user,
    mongodb_update_user,mongodb_delete_user,
    mongodb_getById_User,mongodb_count

}