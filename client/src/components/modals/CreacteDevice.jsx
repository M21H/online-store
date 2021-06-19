import React from 'react'
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap'
import { Context } from '../..'

const CreacteDevice = ({ show, onHide }) => {
	const { device } = React.useContext(Context)
	const [info, setInfo] = React.useState([])

	const addInfo = () => {
		setInfo([...info, { title: '', description: '', number: Date.now() }])
	}

	const removeInfo = number => {
		setInfo(info.filter(info => info.number !== number))
	}

	return (
		<Modal size='lg' centered show={show} onHide={onHide}>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>Add new device</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Dropdown className='mt-2 mb-2'>
						<Dropdown.Toggle>Select type</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.types.map(type => (
								<Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown className='mt-2 mb-2'>
						<Dropdown.Toggle>Select brand</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.brands.map(brand => (
								<Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
					<Form.Control className='mt-3' placeholder='Enter name device'></Form.Control>
					<Form.Control className='mt-3' placeholder='Enter price device'></Form.Control>
					<Form.Control className='mt-3' type='file'></Form.Control>
					<hr />
					<Button variant='outline-dark' onClick={addInfo}>
						Add new information
					</Button>
					{info.map(info => (
						<Row className='mt-3' key={info.number}>
							<Col md={4}>
								<Form.Control placeholder='Enter name of info'></Form.Control>
							</Col>
							<Col md={4}>
								<Form.Control placeholder='Enter name of descrintion'></Form.Control>
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
				<Button variant='outline-success' onClick={onHide}>
					Add
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default CreacteDevice
