const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    title: {type : String ,required: true},
    description: {type : String ,required: true},
    content: {type : String ,required: true},
    time : { type : Date, default: Date.now ,required: true}
});


module.exports = mongoose.model('Order',orderSchema);