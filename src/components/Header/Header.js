import React, { Component } from "react";
import {Link} from 'react-router-dom';
import firebase, {auth} from '../../firebase/index'
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

	login(){
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider).then(function (result) {
			// This gives you a Google Access Token. You can use it to access the Google API.
			var token = result.credential.accessToken;
			// The signed-in user info.
			var user = result.user;
			// ...
		}).catch(function (error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// The email of the user's account used.
			var email = error.email;
			// The firebase.auth.AuthCredential type that was used.
			var credential = error.credential;
			// ...
		});
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
				<div>
					<button onClick={this.login}>Login with Google</button>
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
