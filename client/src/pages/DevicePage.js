import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import bigStar from '../assets/icons/big-star.svg'
import { useHistory, useParams } from 'react-router-dom'
import { fetchOneDevices } from '../http/deviceAPI'

const DevicePage = () => {
	const history = useHistory()
	const [device, setDevice] = React.useState({ info: [] })
	const { id } = useParams()

	React.useEffect(() => {
		fetchOneDevices(id).then(data => setDevice(data))
	}, [])

	return (
		<Container className='mt-3'>
			<Row>
				<Col md={4}>
					<Image src={process.env.REACT_APP_API_URL + device.img} width={300} height={300} />
				</Col>
				<Col md={4}>
					<Row className='d-flex flex-column align-items-center'>
						<h2>{device.name}</h2>
						<div
							className='d-flex align-items-center justify-content-center'
							style={{
								background: `url(${bigStar}) no-repeat center center`,
								width: 240,
								height: 240,
								backgroundSize: 'cover',
								fontSize: 64,
							}}>
							{device.rating}
						</div>
					</Row>
				</Col>
				<Col md={4}>
					<Card
						className='d-flex flex-column align-items-center justify-content-around'
						style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgrey' }}>
						<h3>from: {device.price} &#36;</h3>
						<Row>
							<Button variant='outline-dark' className='m-1'>
								Add to cart
							</Button>
							<Button variant='outline-dark' className='m-1' onClick={() => history.push('/')}>
								Go back
							</Button>
						</Row>
					</Card>
				</Col>
			</Row>
			<Row className='d-flex flex-column mt-3'>
				<h2>Info</h2>
				{device.info.map((info, index) => (
					<Row
						key={info.id}
						style={{ background: index % 2 === 0 ? 'lightgrey' : 'transparent', padding: 10 }}>
						{info.title}: {info.description}
					</Row>
				))}
			</Row>
		</Container>
	)
}

export default DevicePage
