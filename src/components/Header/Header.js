import React, { Component } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios'
import "./Header.css";

class Header extends Component{
	constructor(){
		super()
		this.state={
			count: '',
			user: ''
		}
	}

	componentDidMount(){
		axios.get('/api/user')
		.then(response=>{
			console.log(response.data)
			//store current user data in state
			this.setState({user: response.data})
			//get the taco count for the current user
			axios.get('/api/tacocount')
				.then(response => this.setState({ count: response.data[0].count }))
				.catch(err => console.log(err))
		})
		.catch(err=>console.log(err))


	}
	//return three different views depending on req.session (no user, user, admin)
	render(){
		const today = new Date();
		const day = Math.ceil((today - new Date(today.getFullYear(), 0, 1)) / 86400000);
		return (
			this.state.user.name === 'guest' ?
			//no user view
			<div className="Header">
				<div className="titlebox">
					<img
						src="https://image.flaticon.com/icons/svg/579/579028.svg"
						alt="taco"
					/>
					<Link to="/">Taco Tracker</Link>
				</div>
				<div className="auth">
					<div className="login">
						Log in
					</div>
					<div className="login">
						Sign up
					</div>
				</div>
			</div>
			:
			//user view
			<div className="Header">
				<div className="titlebox">
					<img
						src="https://image.flaticon.com/icons/svg/579/579028.svg"
						alt="taco"
					/>
					<Link to="/">Taco Tracker</Link>
				</div>
				<div className="admincontrols">
					<Link to="/userpage">View Users</Link>
					<Link to="/addtacos">Eat Tacos</Link>
				</div>
				<div className="usercontrols">
					<h3>{this.state.user.username}</h3>
					<h3>Day of the year: {day}</h3>
					<h3>Taco Count: {this.state.count}</h3>
				</div>
			</div>
		);
	}
}

export default Header;
