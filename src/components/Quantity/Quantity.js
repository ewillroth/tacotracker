import React from 'react';
import './Quantity.css';

const Quantity = props => {
	return (
		<div className={"quantity" + props.quantity} id="quantity">
			<div className="taco" id="taco1" />
			<div className="taco" id="taco2" />
			<div className="taco" id="taco3" />
			<div className="taco" id="taco4" />
			<div className="taco" id="taco5" />
		</div>
	)
}

export default Quantity;