const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id:{type:String, required: true},
    fname:{type:String, required: true},
    mobileno:{type:Number, required: true},
    name:{type:String, required: true},
    type: { type: String, required: true },
    price: { type: String, required: true },
    quantity: { type: Number, required: true },
    cash: { type: String, required: true },
    address: { type: String, required: true },
});

module.exports = mongoose.model('Order',orderSchema);