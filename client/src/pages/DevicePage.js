import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import bigStar from '../assets/icons/big-star.svg'

const DevicePage = () => {
	const device = {
		id: 8,
		name: 'Apple 12 pro',
		price: 1200,
		rating: 5,
		img: 'https://i1.foxtrot.com.ua/product/MediumImages/6612158_0.jpg',
	}

	const descriptions = [
		{ id: 1, title: 'RAM', describtion: '6 гб' },
		{ id: 2, title: 'Camera', describtion: '12 mp' },
		{ id: 3, title: 'Processor', describtion: 'A14 Bionic' },
		{ id: 4, title: 'Number of cors', describtion: '6' },
		{ id: 5, title: 'Battery', describtion: '3687' },
	]

	return (
		<Container className='mt-3'>
			<Row>
				<Col md={4}>
					<Image src={device.img} width={300} height={300} />
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
						<Button variant='outline-dark'>Add to cart</Button>
					</Card>
				</Col>
			</Row>
			<Row className='d-flex flex-column mt-3'>
				<h2>Info</h2>
				{descriptions.map((info, index) => (
					<Row
						key={info.id}
						style={{ background: index % 2 === 0 ? 'lightgrey' : 'transparent', padding: 10 }}>
						{info.title}: {info.describtion}
					</Row>
				))}
			</Row>
		</Container>
	)
}

export default DevicePage
