// crypto module
const crypto = require("crypto");

const algorithm = "aes-256-cbc"; 



// the cipher function
function cipher(pwd,securitykey,iv){
const cipher = crypto.createCipheriv(algorithm, securitykey, iv);

// encrypt the message
// input encoding
// output encoding
let encryptedData = cipher.update(pwd, "utf-8", "hex");

encryptedData += cipher.final("hex");

console.log("Encrypted message: " + encryptedData);
return encryptedData
}

/////////////////////////////////////////////
// the decipher function
function decipher(enc_pwd,securitykey,iv){
const decipher = crypto.createDecipheriv(algorithm, securitykey, iv);

let decryptedData = decipher.update(enc_pwd, "hex", "utf-8");

decryptedData += decipher.final("utf8");

console.log("Decrypted message: " + decryptedData);
return decryptedData
}
// const arrayBuffer = new ArrayBuffer(16);

// var str2="InitialVector"
// var bufView2 = new Uint16Array(arrayBuffer);
// for (var i=0, strLen=str2.length; i < strLen; i++) {
//     bufView2[i] = str2.charCodeAt(i);
//     }
//     const initVector = arrayBuffer;

// //const initVector = crypto.randomBytes(16);

// // protected data
// //const message = "This is a secret message";

// // secret key generate 32 bytes of random data
// //const Securitykey = crypto.randomBytes(32);
// const arrayBuffer32 = new ArrayBuffer(32);
// var str="Kekkar@1234"
// var bufView = new Uint16Array(arrayBuffer32);
// for (var i=0, strLen=str.length; i < strLen; i++) {
//     bufView[i] = str.charCodeAt(i);
//     }
// const Securitykey=arrayBuffer32;
// //const Securitykey = Buffer.from(arrayBuffer32);

// let enc=cipher("password@123",Securitykey,initVector)
// decipher(enc,Securitykey,initVector)

module.exports={cipher,decipher}