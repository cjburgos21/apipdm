'use strict'

const express = require('express')
const productoctrl = require('../controladores/producto')
const api = express.Router()
const userctrl = require('../controladores/user')
const auth = require('../middlewares/auth')

api.get('/producto', productoctrl.getProductos)
api.get('/producto/:productoid', productoctrl.getProducto)
api.post('/producto', productoctrl.saveProducto)
api.put('/producto/:productoid', productoctrl.updateProducto)
api.delete('/producto/:productoid', productoctrl.deleteProducto)
api.post('/signup', userctrl.signUp)
api.post('/signin', userctrl.signIn)
api.get('/private', auth, (req, res) => {
	res.status(200).send({message: 'Tienes acceso'})
})

module.exports = api