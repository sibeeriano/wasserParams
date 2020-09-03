var express = require('express');
var router = express.Router();
const controller = require('../controllers/productoControllers')



router.get('/producto',controller.listar);
router.get('/:category',controller.categorias);
router.get('/:category/:id',controller.producto);

module.exports = router