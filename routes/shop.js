// path module from nodejs
const path = require('path');
const shopController = require('../controllers/shop');

const express = require('express');
const router = express.Router();


// shop homepage 
router.get('/', shopController.getIndex);

// 
router.get('/products', shopController.getProducts);

// 
router.get('/cart', shopController.getCart);

// 
router.get('/orders', shopController.getOrders);

// 
router.get('/checkout', shopController.getCheckout);



module.exports = router;