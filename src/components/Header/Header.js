import React, { Component } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios'
import "./Header.css";

class Header extends Component{
	constructor(){
		super()
		this.state={
			count: ''
		}
	}

	componentDidMount(){
		axios.get('/api/tacocount')
		.then(response=>this.setState({count:response.data[0].count}))
		.catch(err=>console.log(err))
	}
	//return three different views depending on req.session (no user, user, admin)
	render(){
		return (
			//admin view
			<div className="Header">
				<div className="titlebox">
					<img src="https://image.flaticon.com/icons/svg/579/579028.svg" alt="taco"></img>
					<Link to="/">Taco Tracker</Link>
				</div>
				<div className="admincontrols">
					<Link to="/userpage">View Users</Link>
					<Link to="/addtacos">Eat Tacos</Link>
				</div>
				<div className="usercontrols">
					<h3>Username</h3>
					<h3>Day of the year</h3>
					<h3>Taco Count</h3>
				</div>
			</div>
		)
	}
}

export default Header;
