import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './User.css';
import Button from '../Button/Button';

const User = (props) => {
	const [count, updateCount] = useState(0);

	const getTacoCount = () => {
		const CancelToken = axios.CancelToken;
		const source = CancelToken.source();

		axios
			.get('/api/tacocount', { cancelToken: source.token })
			.then((response) => updateCount(response.data[0].sum))
			.catch((err) => {
				if (axios.isCancel(err)) {
					console.log('Request cancelled', err.message);
				} else {
					console.log(err);
				}
			});

		return () => {
			source.cancel('did not get taco count');
		};
	};

	useEffect(getTacoCount, []);
	return (
		<div className='user'>
			<img className='profilepic' src={props.user.photoURL} alt='user' />
			<div className='userText'>
				<p>{props.user.displayName}</p>
				<h3>Tacos Eaten: {count}</h3>
				<Button className='logoutButton' onClick={props.logout}>
					Logout
				</Button>
			</div>
		</div>
	);
};

export default User;
