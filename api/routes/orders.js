const express = require('express');
const router = express.Router();

const {
    getAllOrders,
    createOrder,
    getOrder,
    getOrderFromLastDay,
    updateOrder,
    deleteOrder,
    newOrder
} = require('../controllers/orders');

router.get('/getAllOrders',getAllOrders);
router.post('/createOrder',createOrder);
router.post('/newOrder',newOrder);
router.get('/getOrderFromLastDay',getOrderFromLastDay)
router.get('/getOrder/:orderId',getOrder)
router.patch('/updateOrder/:orderId',updateOrder);
router.delete('deleteOrder/:orderId',deleteOrder);

module.exports = router;