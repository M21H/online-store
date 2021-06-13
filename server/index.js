require('dotenv').config()
const express = require('express')
const sequelize = require('./db')

const PORT = process.env.PORT || 7777

const app = express()

const start = async () => {
	try {
    await sequelize.authenticate() //підключення до db
    await sequelize.sync()
		app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
	} catch (error) {
		console.log(error)
	}
}

start()