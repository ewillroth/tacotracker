import React, { useState } from 'react';

const Login = () => {

	const [input, updateInput] = useState({login: '', register: ''})

	return (
		<div className="authModal">
			<input></input>
			<input></input>
			<button>Log In</button>
		</div>
	)
}

export default Login;