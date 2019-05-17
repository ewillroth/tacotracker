import React, { useState } from 'react';

const Register = () => {

	const [input, updateInput] = useState({ name: '', email: '', password: '', passwordVerify: '' })

	return (
		<div className="authModal">
			<input></input>
			<input></input>
			<input></input>
			<input></input>
			<button>Register</button>
		</div>
	)
}

export default Register;