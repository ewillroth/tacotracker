import React, { useState } from 'react';

const Login = () => {

	const [input, updateInput] = useState({login: '', register: ''})

	const captureTyping = (e) => {
		updateInput({...input, [e.target.name]: e.target.value})
	}

	return (
		<div className="authModal">
			<input name="email" onChange={captureTyping}></input>
			<input name="password" onChange={captureTyping}></input>
			<button>Log In</button>
		</div>
	)
}

export default Login;