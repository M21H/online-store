const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')
const { Device } = require('../models/models')

class DeviceController {
	async create(req, res, next) {
		try {
			const { name, price, brandId, typeId, info } = req.body
			const { img } = req.files
			const fileName = uuid.v4() + '.jpg'
			img.mv(path.resolve(__dirname, '..', 'static', fileName))

			const deviсe = await Device.create({ name, price, brandId, typeId, img: fileName })

			return res.json(deviсe)
		} catch (error) {
			next(ApiError.badRequest(error.message))
		}
	}

	async getOne(req, res) {}

	async getAll(req, res) {}
}

module.exports = new DeviceController()
