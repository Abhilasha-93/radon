const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    BookName: String,
    AuthorName: String,
    Category: String,
    year: Number,
    
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //books



