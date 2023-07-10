const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

//conexion  con la BD
//mongoose.connect('mongodb://127.0.0.1:27017/empleadosds02sv22')
mongoose.connect ('mongodb+srv://dulzereza:1234@dulzereza.b9rklfz.mongodb.net/dulzereza?retryWrites=true&w=majority')
    .then((x) => {
        console.log(`conectado exitosamente a la base de datos: "${x.connections[0].name}"`)
    })
    .catch((err) =>{
        console.log('Error al conectarse a mongo, ',err.reason)
    })

    //configuracion de servidor red
const productoRuta = require('./routes/producto.route')
const app = express()
app.use(bodyParser.json())
app.use(
       bodyParser.urlencoded({
        extended: false,
       })
    )

    app.use(cors())
    app.use(express.static(path.join(__dirname, 'dist/productos-mean')))
    app.use('/',express.static(path.join(__dirname, 'dist/productos-mean')))
    app.use('/api',productoRuta) 

    //habilitar el puerto

    const port= process.env.PORT || 4000
    const server = app.listen(port, () =>{
        console.log('conetado al puerto',+port)
    })

    //manejador de error 404
    app.use((req,res,next) =>{
        next(createError(404))
    })

    //manejadro de errores
    app.use(function(err,req,res,next){
        console.log(err.message)
        if(!err.statusCode) err.statusCode= 500
        res.status(err.statusCode).send(err.message)
    })