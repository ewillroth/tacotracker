import React, { Component } from "react";
import {Link} from 'react-router-dom';
import firebase from '../../firebase/index'
import User from '../User/User'
import axios from 'axios'
import "./Header.css";

class Header extends Component{
	constructor(){
		super()
		this.state={
			count: '',
			user: ''
		}
		this.login = this.login.bind(this)
	}

	login(){
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider).then(result => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			// var token = result.credential.accessToken;
			// The signed-in user info.
			var user = result.user;

			axios.put('/api/user', {user})
			.then(response=>{
				console.log(response)
				this.setState({user: response.data})
			}).catch(error=>{
				console.log(error)
			})
		}).catch(function (error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorCode, errorMessage);
			// The email of the user's account used.
			// var email = error.email;
			// The firebase.auth.AuthCredential type that was used.
			// var credential = error.credential;
			// ...
		});
	}

	logout(){
		axios.get('/api/logout').then(response=>{
			console.log(response)
			this.setState({user:'guest'})
		}).catch(err=>{
			console.log(err)
		})
	}

	componentDidMount(){
		axios.get('/api/user')
		.then(response=>{
			if(response.data.name !== 'guest'){
				console.log(response.data)
			}
			//store current user data in state
			this.setState({user: response.data})
		})
		.catch(err=>console.log(err))
	}
	
	//return three different views depending on req.session (no user, user, admin)
	render(){
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
					<button onClick={this.logout}>Logout</button>
				</div>
				<div className="usercontrols">
					<User user={this.state.user}/>
				</div>
			</div>
		);
	}
}

export default Header;
