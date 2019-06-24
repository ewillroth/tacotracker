import React, { Component } from "react";
import axios from 'axios';
import "./Addtacos.css";

class Addtacos extends Component {
	constructor(){
		super()
		this.state={
			quantity: 0,
			source: '',
			description: '',
			rating: ''
		}
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}

	onSubmit = (e) => {
		e.preventDefault()
		const {quantity, rating, description, source} = this.state
		axios.post('/api/tacos', {quantity, rating, description, source})
			.then(response => this.setState({
				quantity: 0,
				source: '',
				description: '',
				rating: ''}))
		.catch(err=>console.log(err))
	}

	render() {
		return (
			<div className="body">
				<form className="addTacoForm" onSubmit={this.onSubmit}>
					<p>Quantity</p>
					<input 
						name="quantity" 
						onChange={this.onChange}
						value={this.state.quantity}
						type="number" required>
					</input>
					<p>From</p>
					<input 
						name="source" 
						onChange={this.onChange}
						autoComplete="off"
						value={this.state.source}
						type="text" required>
					</input>
					<p>Description</p>
					<textarea 
						name="description" 
						onChange={this.onChange}
						value={this.state.description}
						rows="6"
						cols="40"
						autoComplete="off"
						type="text" required>
					</textarea>
					<p>Rating</p>
					<input 
						onChange={this.onChange}
						value={this.state.rating}
						type="range" min="1" max="5"
						name="rating"
						list="ratinglist" required>
					</input>
					<button>Submit</button>
				</form>
				<datalist id="ratinglist">
					<option value="1" />
					<option value="2" />
					<option value="3" />
					<option value="4" />
					<option value="5" />
				</datalist>
			</div>
		);
	}
}

export default Addtacos;
