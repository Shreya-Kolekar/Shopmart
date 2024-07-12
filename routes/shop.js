// path module from nodejs
const path = require('path');
const shopController = require('../controllers/shop');

const express = require('express');
const router = express.Router();


// get shop homepage 
router.get('/', shopController.getIndex);

// 
router.get('/products', shopController.getProducts);

// get product details
router.get('/products/:productId', shopController.getProduct);

// 
router.get('/cart', shopController.getCart);

//
router.post('/cart', shopController.postCart);

// 
router.get('/orders', shopController.getOrders);

// 
router.get('/checkout', shopController.getCheckout);



module.exports = router;