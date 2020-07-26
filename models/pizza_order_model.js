//importing library
const mongoose = require('mongoose');

//creating Order Details schema
const orderDetailsSchema = new mongoose.Schema({
    orderId: {
        type: Number
    },
    phoneNumber:{
        type: Number,
        required: true
    },
    pizzaType: {
        type: String,
        required: true
    },
    pizzaSize: [{
        type: String,
        required: true,
    }],
    quantity: [{
        type: Number,
        required: true
    }],
    customerName:{
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    addressStreet: {
        type: String
    },
    totalAmount: {
        type: Number
    }
},
{
    timestamps: true,
    versionKey: false
});

const OrderDetails = mongoose.model('OrderDetails', orderDetailsSchema);

//exporting module
module.exports = OrderDetails;