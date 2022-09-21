const express = require('express');
const router = express.Router();

const {
    getOrderFromLastDay,
    updateOrder,
    deleteOrder,
    newOrder
} = require('../controllers/orders');

router.post('/newOrder',newOrder);
router.get('/getOrderFromLastDay',getOrderFromLastDay)
router.patch('/updateOrder/:orderId',updateOrder);
router.delete('deleteOrder/:orderId',deleteOrder);

module.exports = router;