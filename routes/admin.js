// path module from nodejs
const path = require('path');

const express = require('express');
const router = express.Router();

// import controller for products
const productsController = require('../controllers/products');

// GET- admin route for adding product
router.get( '/add-product', productsController.getAddProduct);

// POST - admin route for product listing
router.post( '/add-product', productsController.postAddProduct);

module.exports = router;