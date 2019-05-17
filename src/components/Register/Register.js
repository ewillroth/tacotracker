import React, { useState } from 'react';

const Register = () => {

	const [input, updateInput] = useState({ name: '', email: '', password: '', passwordVerify: '' })

	const captureTyping = (e) => {
		updateInput({ ...input, [e.target.name]: e.target.value })
	}

	return (
		<div className="authModal">
			<input name="email" onChange={captureTyping}></input>
			<input name="name" onChange={captureTyping}></input>
			<input name="password" onChange={captureTyping}></input>
			<input name="passwordVerify" onChange={captureTyping}></input>
			<button>Register</button>
		</div>
	)
}

export default Register;