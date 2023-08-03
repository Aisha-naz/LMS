// require('dotenv').config()
const express = require("express");
const app = express();
const User = require('./models/user')
const Books = require('./models/books')
const IssuedBooks = require('./models/issuedbooks')
const cors = require('cors')



// middleware & static files

app.use(express.json());
app.use(cors());

const mongoose = require('mongoose');
const dbURI = "mongodb+srv://smushahid05:mushikazmi@N5@cluster0.fv78g.mongodb.net/readerLibrary?retryWrites=true&w=majority";

// mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true});
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true}).then((result)=>console.log('Connected')).catch((err) => console.log(err));




// // const subscribersRouter = require('./routes/subscribers')
// // app.use('/subscribers',subscribersRouter) 


app.listen(8080);





app.get('/users',(req,res)=>{
    User.find().then(result => {
        res.send(result)
    }).catch(err => console.log(err));
})
app.delete('/user/:id?',(req,res)=>{
    const id = req.params.id;
	User.deleteOne({"_id":id}).then(result => {
        res.send(result)
    }).catch(err => console.log(err));
})
app.post('/user/:id?/:issueBook?/:pass?/:penality?',(req,res)=>{
    const id = req.params.id;
    const book = req.params.issueBook;
    const pass = req.params.pass;
    const penality = req.params.penality;
    const user = new User({_id:id,issuedBooks:book,password:pass,penalty:penality});
    user.save().then(result => res.send(result)).catch(err => console.log(err)); 
})
app.get('/user/:id?',(req,res)=>{
    const id = req.params.id;
	User.findById(id).then(result => {
        res.send(result)
    }).catch(err => console.log(err));
})
app.put('/user/:id?/:issueBook?/:pass?/:penality?',(req,res)=>{
    const id = req.params.id;
    const book = req.params.issueBook;
    const pass = req.params.pass;
    const penality = req.params.penality;
    User.updateOne({"_id":id},{$set:{"issuedBooks":book,"password":pass,"penalty":penality}}).then(() => res.sendStatus(200));
})


app.get('/books',(req,res)=>{
    Books.find().then(result => {
        res.send(result)
    }).catch(err => console.log(err));
})
app.delete('/book/:id?',(req,res)=>{
    const id = req.params.id;
	Books.deleteOne({"_id":id}).then(result => {
        res.send(result)
    }).catch(err => console.log(err));
})
app.post('/book/:isbn?/:title?/:author?/:edition?/:quantity?',(req,res)=>{
	const isbn = req.params.isbn;    
	const title = req.params.title;
    const author = req.params.author;
    const edition = req.params.edition;
    const quantity = req.params.quantity;
    const books = new Books({_id:isbn,title:title,author:author,edition:edition,quantity:quantity});
    books.save().then(result => res.send(result)).catch(err => console.log(err)); 
})
app.get('/book/:id?',(req,res)=>{
    const id = req.params.id;
	Books.findById(id).then(result => {
        res.send(result)
    }).catch(err => console.log(err));
})
app.put('/book/:id?/:title?/:author?/:edition?/:quantity?',(req,res)=>{
    const id = req.params.id;
    const title = req.params.title;
    const author = req.params.author;
    const edition = req.params.edition;
    const quantity = req.params.quantity;
    Books.updateOne({"_id":id},{$set:{"title":title,"author":author,"edition":edition,"quantity":quantity}}).then(() => res.sendStatus(200));
})


app.get('/issuedBooks',(req,res)=>{
    IssuedBooks.find().then(result => {
        res.send(result)
    }).catch(err => console.log(err));
})
app.delete('/issuedbooks/:id?',(req,res)=>{
    const id = req.params.id;
	IssuedBooks.deleteOne({"_id":id}).then(result => {
        res.send(result)
    }).catch(err => console.log(err));
})
app.post('/issuedBooks/:isbn?/:title?/:author?/:issuedBy?/:bookIssued?',(req,res)=>{
    const isbn = req.params.isbn;
    const title = req.params.title;
    const author = req.params.author;
    const issuedBy = req.params.isuedBy;
    const bookIssued = req.params.bookIssued;
    const issuedBooks = new IssuedBooks({_id:isbn,title:title,author:author,issuedBy:issuedBy,bookIssued:bookIssued});
    issuedBooks.save().then(result => res.send(result)).catch(err => console.log(err)); 
})
app.get('/issuedBooks/:id?',(req,res)=>{
    const id = req.params.id;
	IssuedBooks.findById(id).then(result => {
        res.send(result)
    }).catch(err => console.log(err));
})
app.put('/issuedBooks/:id?/:title?/:author?/:issuedBy?/:bookIssued?',(req,res)=>{
    const id = req.params.id;
	
    const title = req.params.title;
    const author = req.params.author;
    const issuedBy = req.params.issuedBy;
    const bookIssued = req.params.bookIssued;
    IssuedBooks.updateOne({"_id":id},{$set:{"title":title,"author":author,"issuedBy":issuedBy, "bookIssued":bookIssued}}).then(() => res.sendStatus(200));
})