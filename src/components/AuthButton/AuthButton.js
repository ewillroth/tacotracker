import React from 'react';
import './AuthButton.css';

const AuthButton = (props) => {

	return (
		<>
			<div name={props.text} onClick={()=>props.toggleModal(props.text)} className="authButton">
				{props.text}
			</div>
		</>
	)
}

export default AuthButton;