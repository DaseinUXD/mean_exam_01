const Product = require('../models/model_product');

module.exports = {

    products: function (request, response) {

        Product.find({}, (error, products) => {
            if (error) {
                response.json({'message': 'error', 'errors': ['Couldn\'t Product.find()']});
            }
            else {
                response.json({'message': 'success', 'data': products});
            }
        });
    },

    productDetails: function (request, response) {
        id = request.params.id;
        console.log('this is the id pulled from params.id:',id);
        Product.findById(id, (error, product) => {
            if (error) {
                response.json({'error': 'Ooooopsies'});
            }
            else {
                response.json({'message': 'success','data': product});
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

    products_edit: (request, response) => {
        id = request.body._id;
        console.log('This is the request.body id:',id);
        Product.findById(id, (error, productEdit)=>{
            console.log('this is the product name found by that id:', productEdit['name'])
            productEdit.name = request.body.name;
            console.log('this is the product name found after trying to change the name by that id:', productEdit['name'])
            productEdit.quantity = request.body.quantity;
            productEdit.price = request.body.price;
            // productEdit.save((error, productEdited)=>{
            //     response.send(productEdited);
            productEdit.save((error)=>{
                if (error) {
                    response.json({'error': error});
                }
                else {
                    response.json({'success': 'success editing'})
                }
            });
        });
    },

    products_delete:(request, response) => {
        id = request.params.id;
        console.log('This is the request.params.id to delete:', id);

        Product.remove({_id: id} , (error, productDelete)=> {
            console.log('this is the id found to delete:', productDelete);
            response.json({'message':'success deleting'});
            // if (error) return response(500).send(error);
            // const response = {
            //     message: 'Product deleted successfully',
            //     id: productDelete._id
            // };
            // return response.status(200).send(response);
        });

    }





};