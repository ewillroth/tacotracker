import React, { Component, useState } from 'react';
import axios from 'axios';
import './Addtacos.css';
import { Redirect } from 'react-router';

const Addtacos = () => {
	const [state, setState] = useState({
		quantity: 0,
		source: '',
		description: '',
		rating: 3,
		redirect: false,
	});

	const onChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const { quantity, rating, description, source } = state;
		axios
			.post('/api/tacos', { quantity, rating, description, source })
			.then((response) =>
				setState({
					quantity: 0,
					source: '',
					description: '',
					rating: 3,
					redirect: true,
				})
			)
			.catch((err) => console.log(err));
	};

	return (
		<div className='body'>
			{state.redirect && <Redirect to='/' />}
			<form className='addTacoForm' onSubmit={onSubmit}>
				<p>Quantity</p>
				<input name='quantity' onChange={onChange} value={state.quantity} type='number' required />
				<p>From</p>
				<input name='source' onChange={onChange} autoComplete='off' value={state.source} type='text' required />
				<p>Description</p>
				<textarea
					name='description'
					onChange={onChange}
					value={state.description}
					rows='6'
					cols='40'
					autoComplete='off'
					type='text'
					required
				/>
				<p>Rating</p>
				<input onChange={onChange} value={state.rating} type='range' min='1' max='5' name='rating' list='ratinglist' required />
				<button>Submit</button>
			</form>
			<datalist id='ratinglist'>
				<option value='1' />
				<option value='2' />
				<option value='3' />
				<option value='4' />
				<option value='5' />
			</datalist>
		</div>
	);
};

export default Addtacos;
