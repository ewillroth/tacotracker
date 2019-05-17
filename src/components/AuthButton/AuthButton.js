import React, {useState} from 'react';
import './AuthButton.css';

const AuthButton = (props) => {

	const [toggle, setToggle] = useState('')

	return (
		<div className="authButton">
			{props.text}
		</div>
	)
}

export default AuthButton;