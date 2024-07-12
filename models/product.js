const fs = require('fs');
const path = require('path');
const Cart = require('./cart');
const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');

const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            // data retrived from data folder is in buffer form/ text form
            cb(JSON.parse(fileContent));
        }
    });
};

// class to create and store products

module.exports = class Product {
    constructor(id, title, imageURL, description, price) {
        this.id = id;
        this.title = title;
        this.imageURL = imageURL;
        this.description = description;
        this.price = price;
    }

    // method to save product
    save() {
        getProductsFromFile( (products) => {
            // update product mode
            if (this.id) {
                const existingProductIndex = products.findIndex(prod => prod.id === this.id);
                const updatedProducts = [...products];
                updatedProducts[existingProductIndex] = this;
                fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
                });
            // add new product mode
            } else {
                this.id = Math.random().toString();
                if (this.title != "") {
                    products.push(this);
                    // JSON stringify takes JS array/obj and converts to JSON
                    fs.writeFile(p, JSON.stringify(products), (err) => {
                        console.log(err);
                    });
                }
            }
        });
    };

    static deleteById(id){
        getProductsFromFile(products => {
            const product = products.find(prod => prod.id === id);
            if (!product) {
                return;
            }
            const updatedProducts = products.filter(p => p.id !== id);
            fs.writeFile(p, JSON.stringify(updatedProducts), err => {
                if (!err){
                    Cart.deleteProduct(id, product.price);
                }
        });
        });
}

    // static method refers to the class and not a particular instance
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }

    // static method to get a specific product from ID
    static findById (id, cb) {
        getProductsFromFile(products => {
            const product = products.find(p => p.id === id);
            cb(product);
        });
    };
};