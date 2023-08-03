const mongoose = require('mongoose');
const Schema = mongoose.Schema ;
const issuedBook = new Schema({
    _id:String,
    title:String,
    author:String,
    issuedBy:String,
    bookIssued:Number
})

module.exports = mongoose.model('IssuedBooks',issuedBook);