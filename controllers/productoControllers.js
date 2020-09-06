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
    },

    agregar:function(req,res){       
        res.render('agregar',{
        title:"Agregar Producto",
            
            })
    },

    publicarProducto: function(req,res,next){
        let lastID = 1;

        dbProducto.forEach(producto=>{
            if(producto.id > lastID){
                lastID = producto.id
            }
        })
        let nuevoProducto={
            id: lastID + 1,
            name: req.body.name.trim(),
            color: req.body.color,
            price: Number(req.body.price),
            category: req.body.category,
            description:req.body.description,
            imagen: (req.files[0])?req.files[0].filename:"productoMuestra.png"
        };
        dbProducto.push(nuevoProducto);
        fs.writeFileSync(path.join(__dirname,"..",'data',"products.json"),JSON.stringify(dbProducto),'utf-8');
        res.redirect('/productos');
    },



    
    
    
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
