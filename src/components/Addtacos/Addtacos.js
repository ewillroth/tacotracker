import React, { Component } from "react";
import { updateQuantity, updateRating, updateDescription, updatePic, updateFrom } from "../../redux/reducer";
import {connect} from 'react-redux';
import "./Addtacos.css";

class Addtacos extends Component {
	render() {
		return (
			<div className="container">
				<p>Quantity</p>
				<input type="number"></input>
				<p>From</p>
				<input type="text"></input>
				<p>Description</p>
				<input type="text"></input>
				<p>Pic</p>
				<input type="text"></input>
				<p>Rating</p>
				<input type="range" min="1" max="5" name="rating" list="ratinglist"></input>
				<button>Submit</button>
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
const mapStateToProps = state => {
	return {
		quantity: state.quantity,
		rating: state.rating,
		description: state.description,
		pic: state.pic,
		from: state.from
	};
};

export default connect(mapStateToProps, {updateQuantity, updateRating, updateDescription, updatePic, updateFrom})(Addtacos);
