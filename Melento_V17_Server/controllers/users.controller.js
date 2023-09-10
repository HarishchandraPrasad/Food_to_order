const user_model = require('../models/user.model.js')
const utility = require("../utility/util.js")
const encryptdecrypt = require("../utility/encryptdecrypt.js")


function getUsers(req,res,next){
    
    user_model.mongodb_get_users()
    .then(
        function (user){
            const objArr = user
            objArr.forEach(o => {
                utility.renamekey(o,"_id","id")
            })
            objArr.forEach(o=>{
                o.password=decrypt_pwd(o.password)
              })
            res.send(user)
        },
        function(err){
            console.log(err)
        }
     )
}

var createUser = (req,res) => {
    let enc_Password=''
    if(!req.body.first_name){
        res.status(400).send({ message : "content can not be empty!"})
        return
    }
    if(!req.body.password){
        res.status(400).send({ message : "password can not be empty!"})
        return
    }else{
        enc_Password = encrypt_pwd(req.body.password)
    }

    const user = {
        _id:req.body.id,
        first_name:req.body.first_name,
        last_name: req.body.last_name,
        dob : req.body.dob,
        email : req.body.email,
        password:enc_Password,
        mobile:req.body.mobile,
        address:req.body.address,
        role:req.body.role
    }

    user_model.mongodb_add_user(user)
        .then(data=> {
            console.log("controller recived : "+JSON.stringify(data))
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message : 
                err.message || "send error occured while creating the user"
            })
        })
}

var getByIduser = (req,res) => {
    console.log("req id"+req.params.id)
    var uid = parseInt(req.params.id)
    if(!req.param){
        req.status(400).send({ message : "Content can not be empty!"})
        return
    }

    const user = {
        _id:uid,
        
    }

    user_model.mongodb_getById_User(user)
        .then(data => {
            
            utility.renamekey(data,"_id","id")
            
            console.log("controller getById recived: "+JSON.stringify(data))
            data.password=decrypt_pwd(data.password)
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message:
                err.message || "Some erroe occured while creating the user"
            })
        })
}

var updateUser = (req,res) =>{
    console.log("req id"+req.params.id)
    var uid = parseInt(req.params.id)
    let enc_Password=''
    if(!req.param){
        req.status(400).send({ message : "Content can not be empty!"})
        return
    }
    if(!req.body.password){
        res.status(400).send({ message : "password can not be empty!"})
        return
    }else{
        enc_Password = encrypt_pwd(req.body.password)
    }

    const user = {
        _id:uid,
        first_name:req.body.first_name,
        last_name: req.body.last_name,
        dob : req.body.dob,
        email : req.body.email,
        password:enc_Password,
        mobile:req.body.mobile,
        address:req.body.address,
        role:req.body.role
    }

    user_model.mongodb_update_user(user)
        .then(data => {
            
            console.log("controller update recived: "+JSON.stringify(data))
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message:
                err.message || "Some error occured while creating the user"
            })
        })
}

var deleteUser = (req,res) => {
    console.log("req id"+req.params.id)
    var uid = parseInt(req.params.id)
    if(!req.param){
        req.status(400).send({ message : "Content can not be empty!"})
        return
    }
    const user = {
        _id:uid,
        
    }

    user_model.mongodb_delete_user(user)
        .then(data => {
            console.log("controller update recived: "+JSON.stringify(data))
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message:
                err.message || "Some erroe occured while creating the user"
            })
        })


}

var displayCount = (req,res) => {
    if(!req.body.role){
        res.status(400).send({ message : "role can not be empty!"})
        return
    }
    const user = {
        role:req.body.role
    }
    user_model.mongodb_count(user)
    .then(data =>{
        
        var data1=[]
        const objArr = data
            objArr.forEach(o => {
                data1.push({
                    "first_name":o.first_name
                })
            })
        var count = 0
        count = objArr.length
        data1.push({
            "count": count
        })
        
        res.send(data1)
        
    }

    )
}

function encrypt_pwd(pwd){
    const arrayBuffer = new ArrayBuffer(16);
    var str2="InitialVector"
    var bufView2 = new Uint16Array(arrayBuffer);
    for (var i=0, strLen=str2.length; i < strLen; i++) {
        bufView2[i] = str2.charCodeAt(i);
        }
    const initVector = arrayBuffer;
    
    //const initVector = crypto.randomBytes(16);
    
    // protected data
    //const message = "This is a secret message";
    
    // secret key generate 32 bytes of random data
    //const Securitykey = crypto.randomBytes(32);
    const arrayBuffer32 = new ArrayBuffer(32);
    var str="Kekkar@1234"
    var bufView = new Uint16Array(arrayBuffer32);
    for (var i=0, strLen=str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
        }
    const Securitykey=arrayBuffer32;
    let res=encryptdecrypt.cipher(pwd,Securitykey,initVector)
    return res
  }
  
  function decrypt_pwd(pwd){
    const arrayBuffer = new ArrayBuffer(16);
    var str2="InitialVector"
    var bufView2 = new Uint16Array(arrayBuffer);
    for (var i=0, strLen=str2.length; i < strLen; i++) {
        bufView2[i] = str2.charCodeAt(i);
        }
        const initVector = arrayBuffer;
    
    //const initVector = crypto.randomBytes(16);
    
    // protected data
    const message = "This is a secret message";
    
    // secret key generate 32 bytes of random data
    //const Securitykey = crypto.randomBytes(32);
    const arrayBuffer32 = new ArrayBuffer(32);
    var str="Kekkar@1234"
    var bufView = new Uint16Array(arrayBuffer32);
    for (var i=0, strLen=str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
        }
    const Securitykey=arrayBuffer32;
    let res=encryptdecrypt.decipher(pwd,Securitykey,initVector)
    return res
  }
  

module.exports = {getUsers,createUser,updateUser,deleteUser,getByIduser,displayCount}