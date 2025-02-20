const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    userName: String,
    email: String,
    password: String,
})


const userModel = mongoose.model('user',userSchema)
//Mongoose automatically collection ka naam pluralize kar deta hai.It create the datbase name in the mongodb
//  Iska matlab hai agar aap 'user' likhte hain, toh MongoDB mein yeh collection 'users' ke naam se store hoti hai.


module.exports = userModel