import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { CreacteDevice, CreateBrand, CreateType } from '../components'

const Admin = () => {
	const [brandVisible, setBrandVisible] = React.useState(false)
	const [typeVisible, setTypeVisible] = React.useState(false)
	const [deviceVisible, setDeviceVisible] = React.useState(false)

	return (
		<Container className='d-flex flex-column'>
			<Button variant='outline-dark' className='my-2' onClick={() => setTypeVisible(true)}>
				Add type
			</Button>
			<Button variant='outline-dark' className='my-2' onClick={() => setBrandVisible(true)}>
				Add brand
			</Button>
			<Button variant='outline-dark' className='my-2' onClick={() => setDeviceVisible(true)}>
				Add device
			</Button>
			<CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
			<CreacteDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
			<CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
		</Container>
	)
}

export default Admin
