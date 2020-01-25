const { Router } = require('express');
const router = Router();

const Book = require('../models/Book');

router.get('/api/books',async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

router.post('/api/books', async (req, res) => {
    const { title,author,isbn } = req.body;
    const newBook = new Book({title,author,isbn});
    await newBook.save();
    res.json({message: 'Book Saved'});
});

router.delete('/api/books/:id', async(req,res)=>{
    book = await Book.findByIdAndDelete(req.params.id);
    res.json({message: 'borrado' });
});

module.exports = router;