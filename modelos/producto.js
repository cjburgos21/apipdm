'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductoSchema = Schema({
	nombre: String,
	categoria: {type: String, enum: ['pan de caja', 'pan dulce', 'otros']},
	imagen: String,
	precio: { type: String, default: 0}
})

module.exports = mongoose.model('Producto', ProductoSchema)