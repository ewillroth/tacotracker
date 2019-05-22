import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {

	const [input, updateInput] = useState({login: '', register: ''})

	const captureTyping = (e) => {
		updateInput({...input, [e.target.name]: e.target.value})
	}

	const handleClickLogin = () => {

	}

	const login = (email, password) => {
		axios.post('/api/login')
	}

	return (
		<div className="authModal">
			<input name="email" onChange={captureTyping}></input>
			<input type="password" name="password" onChange={captureTyping}></input>
			<button>Log In</button>
		</div>
	)
}

export default Login;