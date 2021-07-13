import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { CreateDevice, CreateBrand, CreateType } from '../components'

const Admin = () => {
	const [brandVisible, setBrandVisible] = React.useState(false)
	const [typeVisible, setTypeVisible] = React.useState(false)
	const [deviceVisible, setDeviceVisible] = React.useState(false)

	const history = useHistory()

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

			<Button onClick={() => history.push('/')}>Go to main</Button>

			<CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
			<CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
			<CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
		</Container>
	)
}

export default Admin
