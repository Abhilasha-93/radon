const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: {
        type : String
        },
    author_id: {
        type: ObjectId,
        ref: "author",
        required: [true , "author_id is required"]
    },
    ratings: Number,
    prices: Number,
    publisher_id :{
        type : ObjectId,
        ref: "publisher",
        required: [true , "publisher_id is required"]
    },
    isHardCover : {
        type : Boolean,
        default : false
    }

}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema)
