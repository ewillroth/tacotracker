import React from 'react';
import './User.css'

const User = props => {
	return (
		<div>
			<p>{props.user.displayName}</p>
			<img className="profilepic" src={props.user.photoURL} alt="user"/>
		</div>
	)
}

export default User;