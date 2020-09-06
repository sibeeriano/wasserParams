var express = require('express');
var router = express.Router();
const controller = require('../controllers/productoControllers')



router.get('/',controller.listar);
router.get('/agregar', controller.agregar);
router.post('/agregar', controller.publicar);
router.get('/:cat?',controller.categorias);
router.get('/:cat?/:id?',controller.producto);




module.exports = router