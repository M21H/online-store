require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHendler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 7777

const app = express()
app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use(express.static(path.resolve(__dirname, 'static')))
app.use('/api', router)

app.use(errorHendler)

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
