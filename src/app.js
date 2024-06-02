const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const {config} = require('dotenv')
config()

const bookRoutes = require('./routes/book.routes')

// Usamos express para los middleware
const app = express();
// uso de Body-Parser - Parseador de Bodies
app.use(bodyParser.json())

//Conectar a la bd MondoDB
mongoose.connect(process.env.MONGO_URL, {dbName: process.env.MONGO_DB_NAME})
const db = mongoose.connection;

app.use('/books', bookRoutes) //aca segun el "/books", busca las rutas de "books"


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor iniciando en el puerto ${port}`)
})