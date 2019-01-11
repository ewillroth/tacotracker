import React, {Component} from 'react';
import './Dashboard.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { getTacos } from "../../redux/reducer";

class Dashboard extends Component {
	componentDidMount(){
		axios.get('/api/tacos')
		.then(response=>this.props.getTacos(response.data))
		.catch(err=>console.log(err))
	}
		//return three different views depending on req.session (no user, user, admin)
		//admin view
	render(){
		const map = this.props.tacos.map((taco,i)=>{
			return <div className="Dashboard" key={i}>
					<img alt="tacos" src={taco.pic}></img>
					<p>Rating</p>
					<div className={"rating" + taco.rating} id="rating">
						<div className="star" id="star1" />
						<div className="star" id="star2" />
						<div className="star" id="star3" />
						<div className="star" id="star4" />
						<div className="star" id="star5" />
					</div>
					<p>Number of tacos</p>
					<div className={"quantity" + taco.quantity} id="quantity">
						<div className="taco" id="taco1" />
						<div className="taco" id="taco2" />
						<div className="taco" id="taco3" />
						<div className="taco" id="taco4" />
						<div className="taco" id="taco5" />
					</div>
					<p>Description</p>
					<div className="description">{taco.description}</div>
					<p>From</p>
					<div className="from">{taco.from}</div>
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
