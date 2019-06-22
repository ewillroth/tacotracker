import React, {Component} from 'react';
import './Dashboard.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { getTacos } from "../../redux/reducer";
import TacoCard from '../TacoCard/TacoCard';
import EditTaco from '../EditTaco/EditTaco';

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

	render(){
		const map = this.state.tacos.map((taco,i)=>{
				if(this.state.editnumber===i && this.state.edit){
					return <EditTaco
						key={i}
						cancelEdit={this.cancelEdit}
						onSubmit={this.onSubmit}
						onChange={this.onChange}
						taco={taco}
						quantity={this.state.quantity}
						source={this.state.source}
						description={this.state.description}
						rating={this.state.rating}
					/>
				}
				else {
					return <TacoCard taco={taco} key={i} i={i} toggleEdit={this.toggleEdit} />
				}
		})

		return (
			<div className="body">
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
