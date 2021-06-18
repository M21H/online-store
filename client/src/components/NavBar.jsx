import React from 'react'
import { Nav, Navbar, Button, Container } from 'react-bootstrap'
import { Context } from '..'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useHistory } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE } from '../utils/const'

const NavBar = observer(() => {
	const { user } = React.useContext(Context)
	const history = useHistory()

	return (
		<Navbar bg='dark' variant='dark'>
			<Container>
				<NavLink to='/' style={{ color: 'white' }}>
					Best Shop.by
				</NavLink>
				<Nav className='ml-auto' style={{ color: 'white' }}>
					{user.isAuth ? (
						<>
							<Button variant='outline-light' onClick={() => history.push(ADMIN_ROUTE)}>
								Admin panel
							</Button>
							<Button
								variant='outline-light'
								onClick={() => history.push(LOGIN_ROUTE)}
								className='ml-2'>
								Sign out
							</Button>
						</>
					) : (
						<Button variant='outline-light' onClick={() => user.setIsAuth(true)}>
							Authorize
						</Button>
					)}
				</Nav>
			</Container>
		</Navbar>
	)
})

export default NavBar
