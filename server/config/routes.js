const controller_products = require('../controllers/controller_products'),
    path = require('path');

//routes are first checked here in express

module.exports = (app) => {
    app.get('/products', controller_products.products);
    app.get('/products/:id', controller_products.productDetails);
    // app.get('/products/new'), controller_products.products_new_form);
    app.post('/products', controller_products.products_create);
    app.patch('/products', controller_products.products_edit);
    app.delete('/products/:id', controller_products.products_delete);

    // if no Express routes match, go to Angular
    app.all('*', (request, response, next) => {
        response.sendFile(path.resolve('./public/dist/public/index.html'))
    });


};