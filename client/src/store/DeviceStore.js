import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
	constructor() {
		this._types = [
			{ id: 1, name: 'freeze' },
			{ id: 2, name: 'smatphones' },
		]
		this._brands = [
			{ id: 1, name: 'Samsung' },
			{ id: 2, name: 'Apple' },
		]
		this._devices = [
			{
				id: 1,
				name: '12 pro',
				price: 1200,
				rating: 0,
				img: 'https://i1.foxtrot.com.ua/product/MediumImages/6612158_0.jpg',
			},
			{
				id: 2,
				name: '12 pro',
				price: 1200,
				rating: 0,
				img: 'https://i1.foxtrot.com.ua/product/MediumImages/6612158_0.jpg',
			},
			{
				id: 3,
				name: '12 pro',
				price: 1200,
				rating: 0,
				img: 'https://i1.foxtrot.com.ua/product/MediumImages/6612158_0.jpg',
			},
			{
				id: 4,
				name: '12 pro',
				price: 1200,
				rating: 0,
				img: 'https://i1.foxtrot.com.ua/product/MediumImages/6612158_0.jpg',
			},
			{
				id: 5,
				name: '12 pro',
				price: 1200,
				rating: 0,
				img: 'https://i1.foxtrot.com.ua/product/MediumImages/6612158_0.jpg',
			},
		]
		makeAutoObservable(this)
	}

	setTypes(bool) {
		this._types = bool
	}

	setBrands(brands) {
		this._brands = brands
	}

	setDevices(devices) {
		this._devices = devices
	}

	get types() {
		return this._types
	}

	get brands() {
		return this._brands
	}

	get devices() {
		return this._devices
	}
}
