import { observer } from 'mobx-react-lite'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Context } from '..'
import { BrandBar, DeviceList, TypeBar, Pages } from '../components'
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceAPI'

const Shop = observer(() => {
	const { device } = React.useContext(Context)

	React.useEffect(() => {
		fetchTypes().then(data => device.setTypes(data))
		fetchBrands().then(data => device.setBrands(data))
		fetchDevices(null, null, 1, 2).then(data => {
			device.setDevices(data.rows)
			device.setTotalCount(data.count)
		})
	}, [])

	React.useEffect(() => {
		fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 2).then(data => {
			device.setDevices(data.rows)
			device.setTotalCount(data.count)
		})
	}, [device.page, device.selectedType, device.selectedBrand])

	return (
		<Container>
			<Row className='mt-2'>
				<Col md={3}>
					<TypeBar />
				</Col>
				<Col md={9}>
					<BrandBar />
					<DeviceList />
					<Pages />
				</Col>
			</Row>
		</Container>
	)
})

export default Shop
