//importing libraries
const PizzaOrder = require('../models/pizza_order_model');
const mongoose = require('../configs/mongoose');

//Order create module
module.exports.createOrder = async function(request, response){
    try {
        let uploadData = request.body;
        console.log(request.body);
        let count = await PizzaOrder.countDocuments();
        uploadData.orderId = count+1;
        uploadData.totalAmount = parseInt(uploadData.quantity[0])*100 + parseInt(uploadData.quantity[1])*200; 
        let orderDetails = await PizzaOrder.create(uploadData);

        //console.log(count);
        return response.render('view_order_page',{
            details: orderDetails
        });
    }
    catch(error){
        return response.render('db_error');
    }
}

//Order details
module.exports.getDetail = async function(request, response){
    try {
        let oid = request.params.oid;
        await PizzaOrder.findOne({orderId: oid}, function(error, orderDetails){
            if(error){
                return response.render('db_error');
            }
            else{
                if(orderDetails == null){
                    return response.render('db_error');
                }
                else{
                return response.render('view_order_page',{
                    details: orderDetails
                });
            }
            }
        });
    }
    catch(error){
        return response.render('db_error');
    }
}
