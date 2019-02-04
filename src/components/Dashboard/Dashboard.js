import React, {Component} from 'react';
import './Dashboard.css';
import axios from 'axios';
import { storage } from "../../firebase";
import { connect } from 'react-redux';
import { getTacos } from "../../redux/reducer";

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
			pic: '',
			rating: ''
		}
	}

	componentDidMount(){
		axios.get('/api/tacos')
		.then(response=>console.log(response.data)||this.setState({tacos:response.data}))
		.catch(err=>console.log(err))
	}


	addFile = (e) => {
		this.setState({ pic: e.target.files[0] })
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}

	onSubmit = (e, id) => {
		e.preventDefault()
		if (typeof this.state.pic !== 'string'){
			const upload = storage.ref(`images/tacos/${this.state.quantity + this.state.source + this.state.description + this.state.rating}`).put(this.state.pic)
			upload.on('state_changed', () => { }, (err) => console.log("upload error", err), () => {
				storage.ref(`images/tacos/${this.state.quantity + this.state.source + this.state.description + this.state.rating}`).getDownloadURL()
					.then(url => {
						const { quantity, rating, description, source } = this.state
						axios.put('/api/tacos', { id, quantity, rating, description, pic: url, source })
							.then(response => this.setState({
								tacos: response.data,
								edit: false,
								editnumber: '',
								quantity: 0,
								source: '',
								description: '',
								pic: '',
								rating: ''
							}))
							.catch(err => console.log(err))
					})
					.catch(err => console.log(err))
			})
		} else {
			const { quantity, rating, description, source, pic } = this.state
			axios.put('/api/tacos', { id, quantity, rating, description, pic, source })
				.then(response => this.setState({
					tacos: response.data,
					edit: false,
					editnumber: '',
					quantity: 0,
					source: '',
					description: '',
					pic: '',
					rating: ''
				}))
				.catch(err => console.log(err))
		}
	}


	toggleEdit = (n) => {
		this.setState({
			edit: true,
			editnumber: n,
			quantity: this.state.tacos[n].quantity,
			source: this.state.tacos[n].source,
			description: this.state.tacos[n].description,
			pic: this.state.tacos[n].pic,
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
							<p>Pic</p>
							<input name="pic" onChange={this.addFile} type="file" ></input>
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
						<button onClick={()=>this.toggleEdit(i)}>Edit</button>
						<img alt="tacos" src={taco.pic}></img>
						<p className="label">Rating</p>
						<div className={"rating" + taco.rating} id="rating">
							<div className="star" id="star1" />
							<div className="star" id="star2" />
							<div className="star" id="star3" />
							<div className="star" id="star4" />
							<div className="star" id="star5" />
						</div>
						<p className="label">Number of tacos</p>
						<div className={"quantity" + taco.quantity} id="quantity">
							<div className="taco" id="taco1" />
							<div className="taco" id="taco2" />
							<div className="taco" id="taco3" />
							<div className="taco" id="taco4" />
							<div className="taco" id="taco5" />
						</div>
						<p className="label">Description</p>
						<div className="description">{taco.description}</div>
						<p className="label">From</p>
						<div className="from">{taco.source}</div>
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
