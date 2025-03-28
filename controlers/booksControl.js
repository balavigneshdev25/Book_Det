const Books = require('../models/Books')

exports.getAllBooks = async (req,res)=>{
    try{
        const allBooks = await Books.find()
        res.json(allBooks)
    }
    catch (err){
        res.status(500).json({ error: err.message });
    }
}

exports.createBook = async (req,res)=>{
    try{
        const newBook =  new Books(req.body)
        const saveBook = await newBook.save()
        res.status(200).json(saveBook)
    }
    catch (error){
        res.status(400).json({ error: error.message });
    }
}

exports.updateBook = async (req,res)=>{
    try{
        const updatedBook = await Books.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json(updatedBook)
    }
    catch (error){
        res.status(400).json({ error: error.message });
    }
}

exports.bookDetail = async (req,res)=>{
    try {
        const getBookId = await Books.findById(req.param.id)
        res.status(200).json(getBookId) 
    }
    catch (error){
        res.status(400).json({ error: error.message });
    }
}

exports.deleteBook = async (req, res) => {
    try {
       await Books.findByIdAndDelete(req.params.id);
      res.status(200).json("Book Deleted SuccessFully") 

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  