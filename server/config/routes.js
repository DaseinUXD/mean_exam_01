const products_controller = require('../controllers/controller_products'),
    path = require('path');

//routes are first checked here in express

module.exports = (app) => {
    app.get('/products', products_controller.products);
    app.get('/products/:id', products_controller.product);
    // app.get('/products/new'), products_controller.products_new_form);
    app.post('/products', products_controller.products_create);

    // if no Express routes match, go to Angular
    app.all('*', (request, response, next) => {
        response.sendFile(path.resolve('./public/dist/public/index.html'))
    });

};