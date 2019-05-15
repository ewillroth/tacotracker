import React from 'react';
import './AuthButton.css';

const AuthButton = (props) => {
	return (
		<div className="authButton">
			{props.text}
		</div>
	)
}

export default AuthButton;