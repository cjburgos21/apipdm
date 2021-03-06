'use strict'

const mongoose = require('mongoose')
const User = require('../modelos/user')
const service = require('../servicios')

function signUp(req, res){
	const user = new User({
		email: req.body.email,
		displayName: req.body.displayName,
	})

	user.save((err) => {
		if(err) res.status(500).send({message: `Error al crear usuario:${err}`})

		return res.status(200).send({ token: service.createToken(user) })	
	})
}

function signIn(req, res){

}

module.exports = {
	signUp,
	signIn
}