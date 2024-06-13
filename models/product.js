const fs = require('fs');
const path = require('path');
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
    constructor(t) {
        this.title = t;
    }

    // method to save product
    save() {
        getProductsFromFile( (products) => {
            console.log('******************', this);
            if (this.title != "") {
                products.push(this);
                // JSON stringify takes JS array/obj and converts to JSON
                fs.writeFile(p, JSON.stringify(products), (err) => {
                });
            }
        });
    };

    // static method refers to the class and not a particular instance
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
};