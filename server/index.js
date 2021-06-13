require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')

const PORT = process.env.PORT || 7777

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
	res.status(200).json({ message: 'AWESOME!' })
})

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
