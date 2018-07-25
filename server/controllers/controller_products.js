var Product = require('../models/model_product');

module.exports = {

    products: function (request, response) {

        Product.find({}, (err, products) => {
            if (err) {
                response.json({'message': 'error', 'errors': ['Couldnt Product.find()']});
            }
            else {
                response.json({'message': 'success', 'data': products});
            }
        });
    },

    product: function (request, response) {
        id = request.params.id;
        Product.findById(id, (err, product) => {
            if (err) {
                response.json({'err': 'Ooooopsies'});
            }
            else {
                response.json(product);
            }
        });
    },

    products_create: (request, response) => {
        product = new Product();
        // request.body contains the products passed in from createProducts in http.service.ts
        product.name = request.body.name;
        product.quantity = request.body.quantity;
        product.price = request.body.price;
        console.log(product.name, product.quantity, product.price);
        product.save((error) => {
            if (error) {
                response.json({'error': error});
            }
            else {
                response.json({'success': 'success saving'});
            }
        });
    },

    // products_new_form: (request, response)=> {
    //     product = new
    // }

};