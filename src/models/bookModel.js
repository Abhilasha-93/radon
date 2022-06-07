const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String,
        unique: true,
        required: true
    }, 
    authorName: String, 
    tags: [String],
    totalPages: Number,
    isPublished: Boolean,
    prices: {
        INR: String,
        europePrice: String,
    },
    year: {type: Number, default: 2021},
    stockAvailable: Boolean
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //books
