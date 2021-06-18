import React from 'react'
import star from '../assets/icons/star.svg'
import { Card, Col, Image } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/const'

const DeviceItem = ({ device }) => {
	const history = useHistory()

	return (
		<Col md={3} className='my-4' onClick={() => history.push(`${DEVICE_ROUTE}/${device.id}`)}>
			<Card style={{ width: 150, cursor: 'pointer' }} border='light'>
				<Image width={150} height={150} src={device.img} />

				<div className='text-black-50 mt-1 d-flex justify-content-between align-items-center'>
					<div>Samsung...</div>
					<div className='d-flex align-items-center'>
						<div>{device.rating}</div>
						<Image src={star} width={18} height={18} />
					</div>
				</div>
				<div>{device.name}</div>
			</Card>
		</Col>
	)
}

export default DeviceItem
