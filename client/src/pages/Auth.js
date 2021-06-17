import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Card, Container, Form, Button, Row } from 'react-bootstrap'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/const'

const Auth = () => {
	const location = useLocation()
	const isLogin = location.pathname === LOGIN_ROUTE

	return (
		<Container
			className='d-flex justify-content-center align-items-center'
			style={{ height: window.innerHeight - 54 }}>
			<Card style={{ width: '600px' }} className='p-5'>
				<h2 className='m-auto'>{isLogin ? 'Sign in' : 'Registration'}</h2>
				<Form className='d-flex flex-column'>
					<Form.Control className='mt-3' placeholder='Enter your email...'></Form.Control>
					<Form.Control className='mt-3' placeholder='Enter your password...'></Form.Control>
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
					<Button className='mt-3  align-self-end' variant='outline-success'>
						{isLogin ? 'Sign in' : 'Registration'}
					</Button>
				</Row>
			</Card>
		</Container>
	)
}

export default Auth
