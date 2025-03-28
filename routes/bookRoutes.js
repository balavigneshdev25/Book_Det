const express = require('express');
const router = express.Router();

const { bookDetail,createBook,deleteBook,getAllBooks,updateBook } = require('../controlers/booksControl');

router.post('/', createBook);  // POST /api/users
router.get('/', getAllBooks);   
router.delete('/:id',deleteBook);
router.put('/:id',updateBook);
router.get('/:id',bookDetail);

module.exports = router