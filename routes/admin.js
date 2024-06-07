// path module from nodejs
const path = require('path');
const rootDir = require('../util/path');

const express = require('express');
const router = express.Router();

// get admin route for adding product
router.get( '/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// post admin route for product listing
router.post( '/add-product', (req, res, next) => {
    res.redirect('/');
});

module.exports = router;