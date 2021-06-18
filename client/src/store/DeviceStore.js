import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
	constructor() {
		this._types = [
			{ id: 1, name: 'Refrigerators' },
			{ id: 2, name: 'Smatphones' },
			{ id: 3, name: 'Laptops' },
			{ id: 4, name: 'Smart TV' },
		]
		this._brands = [
			{ id: 1, name: 'Samsung' },
			{ id: 2, name: 'Apple' },
			{ id: 3, name: 'Lenovo' },
			{ id: 4, name: 'Honor' },
			{ id: 5, name: 'Xiaomi' },
		]
		this._devices = [
			{
				id: 1,
				name: 'Apple 12 pro',
				price: 1200,
				rating: 0,
				img: 'https://i1.foxtrot.com.ua/product/MediumImages/6612158_0.jpg',
			},
			{
				id: 2,
				name: 'Apple 12 pro',
				price: 1200,
				rating: 0,
				img: 'https://i1.foxtrot.com.ua/product/MediumImages/6612158_0.jpg',
			},
			{
				id: 3,
				name: 'Apple 12 pro',
				price: 1200,
				rating: 0,
				img: 'https://i1.foxtrot.com.ua/product/MediumImages/6612158_0.jpg',
			},
			{
				id: 4,
				name: 'Apple 12 pro',
				price: 1200,
				rating: 0,
				img: 'https://i1.foxtrot.com.ua/product/MediumImages/6612158_0.jpg',
			},
			{
				id: 5,
				name: 'Apple 12 pro',
				price: 1200,
				rating: 0,
				img: 'https://i1.foxtrot.com.ua/product/MediumImages/6612158_0.jpg',
			},
			{
				id: 6,
				name: 'Apple 12 pro',
				price: 1200,
				rating: 0,
				img: 'https://i1.foxtrot.com.ua/product/MediumImages/6612158_0.jpg',
			},
			{
				id: 7,
				name: 'Apple 12 pro',
				price: 1200,
				rating: 0,
				img: 'https://i1.foxtrot.com.ua/product/MediumImages/6612158_0.jpg',
			},
			{
				id: 8,
				name: 'Apple 12 pro',
				price: 1200,
				rating: 0,
				img: 'https://i1.foxtrot.com.ua/product/MediumImages/6612158_0.jpg',
			},
		]
		this._selectedType = {}
		this._selectedBrand = {}
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

	setSelectedType(type) {
		this._selectedType = type
	}

	setSelectedBrand(brand) {
		this._selectedBrand = brand
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

	get selectedType() {
		return this._selectedType
	}

	get selectedBrand() {
		return this._selectedBrand
	}
}
