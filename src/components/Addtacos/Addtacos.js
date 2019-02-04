import React, { Component } from "react";
import axios from 'axios';
import { storage } from '../../firebase'
import "./Addtacos.css";

class Addtacos extends Component {
	constructor(){
		super()
		this.state={
			quantity: 0,
			source: '',
			description: '',
			pic: '',
			rating: ''
		}
	}

	addFile = (e) => {
		this.setState({ pic: e.target.files[0] })
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}

	onSubmit = (e) => {
		e.preventDefault()
		const upload = storage.ref(`images/tacos/${this.state.quantity + this.state.source + this.state.description + this.state.rating}`).put(this.state.pic)
		upload.on('state_changed', () => {}, (err) => console.log("upload error", err), () => {
			storage.ref(`images/tacos/${this.state.quantity + this.state.source + this.state.description + this.state.rating}`).getDownloadURL()
				.then(url => {
					const {quantity, rating, description, source} = this.state
					axios.post('/api/tacos', {quantity, rating, description, pic: url, source})
						.then(response => this.setState({
							quantity: 0,
							source: '',
							description: '',
							pic: '',
							rating: ''}))
					.catch(err=>console.log(err))
				})
				.catch(err=>console.log(err))
		})
	}

	render() {
		return (
			<div className="container">
				<form onSubmit={this.onSubmit}>
					<p>Quantity</p>
					<input name="quantity" onChange={this.onChange} value={this.state.quantity} type="number" required></input>
					<p>From</p>
					<input name="source" onChange={this.onChange} value={this.state.source} type="text" required></input>
					<p>Description</p>
					<input name="description" onChange={this.onChange} value={this.state.description} type="text" required></input>
					<p>Pic</p>
					<input name="pic" onChange={this.addFile} type="file" required></input>
					<p>Rating</p>
					<input onChange={this.onChange} value={this.state.rating} type="range" min="1" max="5" name="rating" list="ratinglist" required></input>
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
