/*var express = require('express');
var router = require('.');

let controller = require('../controllers/usersControllers');


router.get('/registro', controller.registro);
router.get('/recuperar', controller.recuperar);
router.get('/iniciarsesion', controller.iniciarsesion);

module.exports=router
*/

var express = require('express');
var router = require('.');
const controller = require('../controllers/usersControllers');



router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/iniciarSesion', controller.iniciarSesion);
router.get('/registro', controller.registro);

module.exports = router;