const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'The product must have a name.'], minlength: [3, 'The product\'s name must be at least 3 characters long']},
    quantity: {type: Number, min: [0, 'Product quantity must be greater than or equal to zero(0).'], required: [true, 'All products must have a quantity']},
    price: {type: Number, min:[0, 'Product price must be greater than or equal to $0.00.'], required: [true, 'The product must have a price.']}
}, {timestamps: true});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;