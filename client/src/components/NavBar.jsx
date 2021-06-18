import React from 'react'
import { Nav, Navbar, Button, Container } from 'react-bootstrap'
import { Context } from '..'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

const NavBar = observer(() => {
	const { user } = React.useContext(Context)

	return (
		<Navbar bg='dark' variant='dark'>
			<Container>
				<NavLink to='/' style={{ color: 'white' }}>
					Best Shop.by
				</NavLink>
				<Nav className='ml-auto' style={{ color: 'white' }}>
					{user.isAuth ? (
						<>
							<Button variant='outline-light'>Admin panel</Button>
							<Button variant='outline-light' className='ml-2'>
								Sign in
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