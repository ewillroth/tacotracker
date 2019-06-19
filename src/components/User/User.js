import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './User.css';

const User = props => {

	const [count, updateCount] = useState(0)
	
	const getTacoCount = () => {
		axios.get('/api/tacocount')
		.then(response => updateCount(response.data[0].count) )
		.catch(err => console.log(err))
	}
	
	useEffect(getTacoCount, [])

	const today = new Date();
	const day = Math.ceil((today - new Date(today.getFullYear(), 0, 1)) / 86400000);
	return (
		<div className="user">
			<img className="profilepic" src={props.user.photoURL} alt="user"/>
			<div className="userText">
				<p>{props.user.displayName}</p>
				<h3>Day of the year: {day}</h3>
				<h3>Taco Count: {count}</h3>
		</div>
		</div>
	)
}

export default User;