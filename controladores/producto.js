
'use strict'

const Producto = require('../modelos/producto')


function getProducto (req, res){
	let productoid = req.params.productoid

	Producto.findById(productoid, (err, producto) => {
		if(err) return res.status(500).send({message: `Error al realizar peticion: ${err}`})
		if(!producto) return res.status(404).send({message: `El producto no existe`})

		res.status(200).send({ producto })
	})
}

function getProductos (req, res){
	Producto.find({}, (err, productos) => {
		if(err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
		if(!productos) return res.status(404).send({message: 'No existen productos'})	
	
		res.status(200, {productos})
	})

}

function saveProducto (req, res){
	console.log('POST /api/producto')
	console.log(req.body)


	let producto = new Producto()
	producto.nombre = req.body.nombre
	producto.imagen = req.body.imagen
	producto.precio = req.body.precio
	producto.categoria = req.body.categoria
	producto.save((err, productoStored) => {
		if(err) res.status(500).send({message: `Error al guardar en base de datos: ${err}`})

			res.status(200).send({producto: productoStored})
	})
}


function updateProducto (req, res){
	let productoid = req.params.productoid
	let update = req.body

	Producto.findByIdAndUpdate(productoid, update, (err, productoUpdated) => {
		if (err) res.status(500).send({message: `Error al actualizar el producto: ${err}`})
	
	res.status(200).send({producto: productoUpdated})
	})
}

function deleteProducto (req, res) {
	let productoid = req.params.productoid

	Producto.findById(productoid, (err, producto) => {
		if (err) res.status(500).send({message: `Error borrando producto: ${err}`})
	
	producto.remove(err => {
		if (err) res.status(500).send({message: `Error borrando producto: ${err}`})
		res.status(200).send({message: ' El producto fue eliminado'})

		})

	})
}

module.exports = {
	getProducto,
	getProductos,
	saveProducto,
	updateProducto,
	deleteProducto
}