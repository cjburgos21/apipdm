'use strict'

const services = require('../servicios')

function isAuth (req, res, next){
	if(!req.headers.authorization) {
		return res.status(405).send({message: 'No tienes autorizacion'})
	}
	const token = req.headers.authorization.split("")[1]
	
	services.decodeToken(token)
	.then(response => {
		req.user = response
		next()
	})
	.catch(response => {
		res.status(response.status)
	})
	}

module.exports = isAuth
