const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    title: {type : String ,required: true},
    description: {type : String ,required: true},
    content: {type : String ,required: true},
});

const orders = [
    {name: 'Mongoose1', title: 'test' , content: 'blabla' },
    {name: 'Mongoose2', title: 'test2', content: 'blabla2'},
    {name: 'Mongoose7', title: 'test3', content: 'blabla3'},
];


module.exports = mongoose.model('Order',orderSchema);