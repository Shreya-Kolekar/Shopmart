// path module from nodejs
const path = require('path');

const express = require('express');
const router = express.Router();

// import controller for products
const adminController = require('../controllers/admin');

// GET- admin route for adding product
router.get( '/add-product', adminController.getAddProduct);

// GET- admin route for products
router.get( '/products', adminController.getProducts);

// POST - admin route for product listing
router.post( '/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;