const fs = require('fs');
const path = require('path')
let dbProducto = require('../data/database')

module.exports={
    listar:function(req, res){
        res.render('PRODUCTOS',{
            title:"Nuestros productos",
            dbProducto:dbProducto
        });
    },
    
    cargaProducto:function(req, res) {
        res.render('carga', { title: 'Admin carga' });
    },
    detalleProducto: function(req, res) {
        res.render('DETALLEPRODUCTO', {
          title: "Detalle de producto" //falta logica
        });
    },
    carrito:function(req, res) {
        res.render('Carrito', {
          title: "Carrito de compras" //falta logica
        });
    },
    cateProducto:function(req,res){
        let catProducto = req.params.catProducto
        res.render('categoria',{
            title:"wasser",
            catProducto:catProducto,
            dbProducto:dbProducto 
        })
    }
    /*publicarProducto: function(req,res,next){
        let lastID = 1;

        dbProducto.forEach(producto=>{
            if(producto.id > lastID){
                lastID = producto.id
            }
        })
        let nuevoProducto={
            id: lastID + 1,
            nombre: req.body.nombre.trim(),
            precio: Number(req.body.precio),
            descuento: Number(req.body.descuento),
            categoriaProducto: req.body.catergoria,
            descripcion:req.body.descripcion,
            imagen: (req.files[0])?req.files[0].filename:"productoMuestra.png"
        };
        dbProducto.push(nuevoProducto);
        fs.writeFileSync(path.join(__dirname,"..",'data',"productosDataBase.json"),JSON.stringify(dbProducto),'utf-8');
        res.redirect('/productos');
    }*/
}