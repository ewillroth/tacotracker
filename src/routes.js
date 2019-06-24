import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Addtacos from './components/Addtacos/Addtacos'

export default (
	<Switch>
		<Route path="/addtacos" component={Addtacos}></Route>
		<Route path="/" component={Dashboard}></Route>
	</Switch>
);