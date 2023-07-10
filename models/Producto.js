const mongoose =require ('mongoose')
const Schema = mongoose.Schema
let Producto =new Schema({
    nombre: {type:String},
    descripcion:{type:String},
    precio:{type:Number},
    peso:{type:Number}
},{
    collectionn: 'productos'
})


module.exports = mongoose.model('Producto',Producto)


