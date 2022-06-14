const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema( {
    
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: [true , "user_id is required"]
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        required: [true , "product_id is required"]
    },
    amount: Number,
    isFreeAppUser: Boolean,
    date: Date

}, { timestamps: true });


module.exports = mongoose.model('order', orderSchema) 
