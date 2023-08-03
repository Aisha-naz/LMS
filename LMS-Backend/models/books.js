const mongoose = require('mongoose');
const Schema = mongoose.Schema ;
const book = new Schema({
    _id:String,
    title:String,
    author:String,
    edition:String,
    quantity:Number
})

module.exports = mongoose.model('Books',book);