var express = require('express');
var router = express.Router();
const controller = require('../controllers/productoControllers')



router.get('/productos',controller.listar);
router.get('/categorias/:cat',controller.categorias);
router.get('/categorias/:cat/:id',controller.producto);

module.exports = router