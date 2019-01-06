import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Newuser from './components/Newuser/Newuser'
import Userpage from './components/Userpage/Userpage'
import Addtacos from './components/Addtacos/Addtacos'

export default (
	<Switch>
		<Route exact path="/" component={Dashboard}></Route>
		<Route path="/newuser" component={Newuser}></Route>
		<Route path="/userpage" component={Userpage}></Route>
		<Route path="/addtacos" component={Addtacos}></Route>
	</Switch>
);

