// path module from nodejs
const path = require('path');
const productsController = require('../controllers/products');

const express = require('express');
const router = express.Router();


// shop homepage 
router.get('/', productsController.getProducts);

module.exports = router;