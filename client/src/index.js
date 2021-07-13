import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import UserStore from './store/UserStore'
import DeviceStore from './store/DeviceStore'

export const Context = React.createContext(null)

ReactDOM.render(
	// <React.StrictMode>
	<BrowserRouter>
		<Context.Provider
			value={{
				user: new UserStore(),
				device: new DeviceStore(),
			}}>
			<App />
		</Context.Provider>
	</BrowserRouter>,
	// </React.StrictMode>,
	document.getElementById('root')
)
