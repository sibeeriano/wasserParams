let dbProducto = require('../data/database')


module.exports={
    listar:function(req, res){
        res.render('productos',{
            title:"Nuestros productos",
            productos:dbProducto
        });
    },

    categorias:function(req,res){

        let cat=req.params.cat

        let productos = dbProducto.filter(producto=>{
            return producto.category == cat
        })
       
         res.render('categoria',{
            title: "WASSER",
            productos:productos
        })
    },

    producto: function(req, res) { //detalle de producto
        let id=req.params.id

        let producto = dbProducto.filter((producto) => {
            return id == producto.id});
        
            res.render('producto',{
                producto:producto
        });
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
