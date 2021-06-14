const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')
const { Device, DeviceInfo } = require('../models/models')

class DeviceController {
	async create(req, res, next) {
		try {
			let { name, price, brandId, typeId, info } = req.body
			const { img } = req.files
			const fileName = uuid.v4() + '.jpg'
			img.mv(path.resolve(__dirname, '..', 'static', fileName))

			const deviсe = await Device.create({ name, price, brandId, typeId, img: fileName })

			if (info) {
				info = JSON.parse(info)
				info.forEach(info =>
					DeviceInfo.create({
						title: info.title,
						description: info.description,
						deviсeId: divice.id,
					})
				)
			}

			return res.json(deviсe)
		} catch (error) {
			next(ApiError.badRequest(error.message))
		}
	}

	async getOne(req, res) {
		const { id } = req.params
		const device = await Device.findOne({
			where: { id },
			include: [{ model: DeviceInfo, as: 'info' }],
		})
		return res.json(device)
	}

	async getAll(req, res) {
		let { brandId, typeId, limit, page } = req.query
		page = page || 1
		limit = limit || 9
		let offset = page * limit - limit

		let devices
		if (!brandId && !typeId) {
			devices = await Device.findAndCountAll({ limit, offset })
		}
		if (brandId && !typeId) {
			devices = await Device.findAndCountAll({ where: { brandId }, limit, offset })
		}
		if (!brandId && typeId) {
			devices = await Device.findAndCountAll({ where: { typeId }, limit, offset })
		}
		if (brandId && typeId) {
			devices = await Device.findAndCountAll({ where: { brandId, typeId }, limit, offset })
		}
		return res.json(devices)
	}
}

module.exports = new DeviceController()
