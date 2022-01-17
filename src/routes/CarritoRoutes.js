const express = require('express');
const CarritoController = require('../controllers/CarritoController');
const router = express.Router()
const controller = new CarritoController();

router.post('/getCarrito', controller.getProductos)
router.post('/addCarrito', controller.addProductos)
router.delete('/deleteCarrito', controller.deleteProducto)
router.delete('/comprarCarrito', controller.comprarProductos)

module.exports = router