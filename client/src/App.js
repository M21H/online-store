import React from 'react'
import { observer } from 'mobx-react-lite'
import { Switch, Route } from 'react-router-dom'
import { Context } from '.'
import { NavBar } from './components'
import { NotFound } from './pages/NotFound'
import { authRoutes, publicRoutes } from './routes'
import { check } from './http/userAPI'
import { Spinner } from 'react-bootstrap'

export const App = observer(() => {
	const { user } = React.useContext(Context)
	const [loading, setLoading] = React.useState(true)

	React.useEffect(() => {
		check()
			.then(data => {
				user.setUser(true)
				user.setIsAuth(true)
			})
			.finally(() => setLoading(false))
	}, [])

	if (loading) {
		return <Spinner animation='grow' />
	}

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
})
