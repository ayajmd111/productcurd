var product = require('./product/product.ctrl');
module.exports = function (app) {

    app.post('/api/register', product.register)
    app.get('/api/productList', product.productList)
    app.post('/api/removeuser',product.removeUser)
    app.post('/api/update',product.updateUserData) 

 
    
    
  
    

}