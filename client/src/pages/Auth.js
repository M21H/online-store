import React from 'react'
import { NavLink, useLocation, useHistory } from 'react-router-dom'
import { Card, Container, Form, Button, Row } from 'react-bootstrap'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/const'
import { login, registration } from '../http/userAPI'
import { observer } from 'mobx-react-lite'
import { Context } from '..'

const Auth = observer(() => {
	const { user } = React.useContext(Context)
	const location = useLocation()
	const history = useHistory()
	const isLogin = location.pathname === LOGIN_ROUTE
	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')

	const click = async () => {
		try {
			let data
			if (isLogin) {
				data = await login(email, password)
			} else {
				data = await registration(email, password)
			}
			user.setUser(user)
			user.setIsAuth(true)
			history.push(SHOP_ROUTE)
		} catch (error) {
			alert(error.response.data.message)
		}
	}

	return (
		<Container
			className='d-flex justify-content-center align-items-center'
			style={{ height: window.innerHeight - 54 }}>
			<Card style={{ width: '600px' }} className='p-5'>
				<h2 className='m-auto'>{isLogin ? 'Sign in' : 'Registration'}</h2>
				<Form className='d-flex flex-column'>
					<Form.Control
						className='mt-3'
						placeholder='Enter your email...'
						value={email}
						onChange={e => setEmail(e.target.value)}></Form.Control>
					<Form.Control
						className='mt-3'
						placeholder='Enter your password...'
						value={password}
						onChange={e => setPassword(e.target.value)}
						type='password'></Form.Control>
				</Form>
				<Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
					{isLogin ? (
						<div>
							Has not account? <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
						</div>
					) : (
						<div>
							Has account? <NavLink to={LOGIN_ROUTE}>Log In</NavLink>
						</div>
					)}
					<Button onClick={click} className='mt-3  align-self-end' variant='outline-success'>
						{isLogin ? 'Sign in' : 'Registration'}
					</Button>
				</Row>
			</Card>
		</Container>
	)
})

export default Auth
