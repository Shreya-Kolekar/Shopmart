const db = require('../util/database');
const Cart = require('./cart');



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
        // Here execute method return a promise
        return db.execute('INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)',
            [this.title, this.price, this.imageURL, this.description]
        );
    };

    static deleteById(id){}

    // static method refers to the class and not a particular instance
    static fetchAll() {
        return db.execute('SELECT * FROM products'); // return a promise
    }

    // static method to get a specific product from ID
    static findById (id) {
        return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
    };
};