const mongoose = require('mongoose');


const booksSchema = new mongoose.Schema({
 title:{required:true,type:String},
 author:{required:true,type:String},
 genre:{required:true,type:String},
 year:{required:true,type:Number},
},{timestamps:true})

module.exports = mongoose.model('books_collections',booksSchema)

// [
//     { "title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "genre": "Fiction", "year": 1925 },
//     { "title": "To Kill a Mockingbird", "author": "Harper Lee", "genre": "Classic", "year": 1960 },
//     { "title": "1984", "author": "George Orwell", "genre": "Dystopian", "year": 1949 },
//     { "title": "The Hobbit", "author": "J.R.R. Tolkien", "genre": "Fantasy", "year": 1937 },
//     { "title": "The Catcher in the Rye", "author": "J.D. Salinger", "genre": "Classic", "year": 1951 }
//   ]