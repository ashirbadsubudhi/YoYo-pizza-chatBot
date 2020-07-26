//importing library
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/index');
const { request } = require('express');


//end-points
router.get('/', (request, response) => {
    return response.render('home');
});

router.get('/render/new-order', (request, response) => {
    return response.render('create_order_page');
});

// router.get('/orders/search', orderController.searchOrder);

router.post('/orders/create/', orderController.createOrder);
router.get('/orders/:oid/', orderController.getDetail);

//Hitting incorrect end-point
router.all('/*', (request, response) => {
    // return response.json(404,{
    //     message: "bad Request!!"
    // });
    return response.render('not_found');
});

//exporting modules
module.exports = router;