import React, {Component} from 'react';
import './Dashboard.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { getTacos } from "../../redux/reducer";
import Rating from '../Rating/Rating';
import Quantity from '../Quantity/Quantity';

class Dashboard extends Component {
	constructor(){
		super()
		this.state={
			tacos: [],
			edit: false,
			editnumber: '',
			quantity: 0,
			source: '',
			description: '',
			rating: ''
		}
	}

	componentDidMount(){
		axios.get('/api/tacos')
		.then(response=>this.setState({tacos:response.data}))
		.catch(err=>console.log(err))
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}

	onSubmit = (e, id) => {
		e.preventDefault()
		const { quantity, rating, description, source} = this.state
		axios.put('/api/tacos', { id, quantity, rating, description, source })
			.then(response => this.setState({
				tacos: response.data,
				edit: false,
				editnumber: '',
				quantity: 0,
				source: '',
				description: '',
				rating: ''
			}))
			.catch(err => console.log(err))
	}


	toggleEdit = (n) => {
		this.setState({
			edit: true,
			editnumber: n,
			quantity: this.state.tacos[n].quantity,
			source: this.state.tacos[n].source,
			description: this.state.tacos[n].description,
			rating: this.state.tacos[n].rating
		})
	}

	cancelEdit = () => {
		this.setState({
			edit: false,
			editnumber: ''
		})
	}
		//return three different views depending on req.session (no user, user, admin)
		//admin view
	render(){
		const map = this.state.tacos.map((taco,i)=>{
			return <div className="Dashboard" key={i}>
					{this.state.editnumber===i && this.state.edit
					?	//edit toggled on
					<>
						<button onClick={this.cancelEdit}>Cancel</button>
						<form onSubmit={(e)=>{
							e.preventDefault()
							this.onSubmit(e,taco.taco_id)}}>
							<p>Quantity</p>
							<input name="quantity" onChange={this.onChange} value={this.state.quantity} type="number" ></input>
							<p>From</p>
							<input name="source" onChange={this.onChange} value={this.state.source} type="text" ></input>
							<p>Description</p>
							<input name="description" onChange={this.onChange} value={this.state.description} type="text" ></input>
							<p>Rating</p>
							<input onChange={this.onChange} value={this.state.rating} type="range" min="1" max="5" name="rating" list="ratinglist"></input>
							<button>Submit</button>
						</form>
						<datalist id="ratinglist">
							<option value="1" />
							<option value="2" />
							<option value="3" />
							<option value="4" />
							<option value="5" />
						</datalist>
					</>
					:	//edit toggled off
					<>
						{/* <p className="label">Number of tacos</p> */}
						<Quantity quantity={taco.quantity} />
						{/* <p className="label">Rating</p> */}
						<Rating rating={taco.rating} />
						{/* <p className="label">Description</p> */}
						<div className="description">{taco.description}</div>
						{/* <p className="label">From</p> */}
						<div className="from">{taco.source}</div>
						<button onClick={()=>this.toggleEdit(i)}>Edit</button>
					</>
					}
				</div>;
		})
		return (
			<div className="container">
				{map}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		tacos: state.tacos
	};
};


export default connect(mapStateToProps, {getTacos})(Dashboard);
