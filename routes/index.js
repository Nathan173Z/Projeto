const router = require('express').Router();

// Rota dos produtos
const productsRoutes = require('./products.routes');
router.use('/products', productsRoutes);


module.exports = router ;

