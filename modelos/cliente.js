'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClienteSchema = Schema({
	nombre: String,
	edad:{ type: String, default: 0},
	categoria: {type: String, enum: ['frecuente', 'ocasional']}
})

module.exports = mongoose.model('Cliente', ClienteSchema)