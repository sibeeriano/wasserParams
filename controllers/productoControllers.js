const fs = require('fs');
const path = require('path')
let dbProducto = require('../data/database')


module.exports={
    listar:function(req, res){
        res.render('productos',{
            title:"Nuestros productos",
            dbProducto:dbProducto
        });
    },

    producto: function(req, res) { //detalle de producto
        let id=req.params.id

        let producto = dbProduct.forEach((producto) => {
            return id == producto.id});
        
            res.render('producto',{
                producto:producto
        });
    },
    
    categorias:function(req,res){

        let cat=req.params.category

        let categoria = dbProducto.forEach(producto => {
            return cat == producto.category
         })
         res.render('categorias',{
            title: "WASSER",
            categoria: categoria,
        })
    }
    
}




         /*
         let cocina = dbProducto.filter(producto => {
           return producto.category == "cocina"
         })
         let bachas = dbProducto.filter(producto => {
         return producto.category== "bachas"
         })
         let sanitarios = dbProducto.filter(producto => {
         return producto.category== "sanitarios"
         })
        let bañeras = dbProducto.filter(producto => {
         return producto.category== "bañeras"
         })
        let accesorios = dbProducto.filter(producto => {
         return producto.category== "accesorios"
         })*/

         
           /*
           cocina: cocina,
           bachas: bachas,
           sanitarios: sanitarios,
           bañeras: bañeras,
           accesorios: accesorios
*/
