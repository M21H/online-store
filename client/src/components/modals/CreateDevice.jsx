import { observer } from 'mobx-react-lite'
import React from 'react'
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap'
import { Context } from '../..'
import { createDevice, fetchBrands, fetchTypes } from '../../http/deviceAPI'

const CreateDevice = observer(({ show, onHide }) => {
	const { device } = React.useContext(Context)

	const [name, setName] = React.useState('')
	const [price, setPrice] = React.useState(0)
	const [file, setFile] = React.useState(null)
	const [info, setInfo] = React.useState([])

	React.useEffect(() => {
		fetchTypes().then(data => device.setTypes(data))
		fetchBrands().then(data => device.setBrands(data))
	}, [])

	const addInfo = () => {
		setInfo([...info, { title: '', description: '', number: Date.now() }])
	}

	const removeInfo = number => {
		setInfo(info.filter(info => info.number !== number))
	}

	const changeInfo = (key, value, number) => {
		setInfo(info.map(info => (info.number === number ? { ...info, [key]: value } : info)))
	}

	const selectFile = e => {
		setFile(e.target.files[0])
	}

	const addDevice = () => {
		console.log(info)
		const formData = new FormData()
		formData.append('name', name)
		formData.append('price', `${price}`)
		formData.append('img', file)
		formData.append('brandId', device.selectedBrand.id)
		formData.append('typeId', device.selectedType.id)
		formData.append('info', JSON.stringify(info))
		createDevice(formData).then(data => onHide())
	}

	return (
		<Modal size='lg' centered show={show} onHide={onHide}>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>Add new device</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Dropdown className='mt-2 mb-2'>
						<Dropdown.Toggle>{device.selectedType.name || 'Select type'}</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.types.map(type => (
								<Dropdown.Item key={type.id} onClick={() => device.setSelectedType(type)}>
									{type.name}
								</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown className='mt-2 mb-2'>
						<Dropdown.Toggle>{device.selectedBrand.name || 'Select brand'}</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.brands.map(brand => (
								<Dropdown.Item key={brand.id} onClick={() => device.setSelectedBrand(brand)}>
									{brand.name}
								</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
					<Form.Control
						className='mt-3'
						placeholder='Enter name device'
						value={name}
						onChange={e => setName(e.target.value)}></Form.Control>
					<Form.Control
						className='mt-3'
						placeholder='Enter price device'
						value={price}
						onChange={e => setPrice(Number(e.target.value))}></Form.Control>
					<Form.Control className='mt-3' type='file' onChange={selectFile}></Form.Control>
					<hr />
					<Button variant='outline-dark' onClick={addInfo}>
						Add new information
					</Button>
					{info.map(info => (
						<Row className='mt-3' key={info.number}>
							<Col md={4}>
								<Form.Control
									placeholder='Enter name of info'
									value={info.title}
									onChange={e => changeInfo('title', e.target.value, info.number)}></Form.Control>
							</Col>
							<Col md={4}>
								<Form.Control
									placeholder='Enter name of description'
									value={info.description}
									onChange={e =>
										changeInfo('description', e.target.value, info.number)
									}></Form.Control>
							</Col>
							<Col md={4}>
								<Button variant='outline-danger' onClick={() => removeInfo(info.number)}>
									Delete
								</Button>
							</Col>
						</Row>
					))}
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='outline-danger' onClick={onHide}>
					Close
				</Button>
				<Button variant='outline-success' onClick={addDevice}>
					Add
				</Button>
			</Modal.Footer>
		</Modal>
	)
})

export default CreateDevice
