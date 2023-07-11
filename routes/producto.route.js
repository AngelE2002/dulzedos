const express = require("express")
const productoRuta = express.Router()

//Declaramos un objeto de nuestro modelo//
let Producto = require('../models/Producto')

//Agregar un nuevo empleado//
productoRuta.route('/create').post((req,res)=>{
    Producto.create(req.body)
    .then((data)=>{
        console.log('se inserto un registro')
        res.send(data)
    })
    .catch((err)=>{
        console.error.apply(err)
    })
})

//Obtenemos todos los empleados//
productoRuta.route('/productos').get((req,res)=>{
    Producto.find()
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.error(err)
    })
})

//Obtenemos un solo empleado por su id//
productoRuta.route('/producto/:id').get((req,res)=>{
    Producto.findById(req.params.id)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.error(err)
    })
})

//Actualizar un empleado//
productoRuta.route('/update/:id').put((req,res)=>{
    Producto.findByIdAndUpdate(req.params.id,{
        $set:req.body
    })
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.error(err)
    })
})

//Metodo para eliminar empleado//
productoRuta.route('/delete/:id').delete((req,res)=>{
    Producto.findByIdAndRemove(req.params.id)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.error(err)
    })
})

module.exports = productoRuta;
