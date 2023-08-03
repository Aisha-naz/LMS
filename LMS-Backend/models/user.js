const mongoose = require('mongoose');
const Schema = mongoose.Schema ;
const user = new Schema({
    _id:String,
    issuedBooks:Number,
    password:String,
    penalty:Number
})

module.exports = mongoose.model('User',user);