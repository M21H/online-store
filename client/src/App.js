import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Context } from '.'
import { NavBar } from './components'
import { NotFound } from './pages/NotFound'
import { authRoutes, publicRoutes } from './routes'

export const App = () => {
	const { user } = React.useContext(Context)
	return (
		<>
			<NavBar />
			<Switch>
				{user.isAuth &&
					authRoutes.map(({ path, Component }) => (
						<Route key={path} path={path} component={Component} exact />
					))}

				{publicRoutes.map(({ path, Component }) => (
					<Route key={path} path={path} component={Component} exact />
				))}
				<Route path='*' component={NotFound} />
			</Switch>
		</>
	)
}
