import React from 'react'
import { NavLink } from 'react-router-dom'

export const NotFound = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: 'calc(100vh - 54px)',
				flexDirection: 'column',
			}}>
			<h1>
				<center> PAGE NOT FOUND 404</center>
			</h1>
			<NavLink to='/'>
				<p>go to main page</p>
			</NavLink>
		</div>
	)
}
