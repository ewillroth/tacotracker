import React from 'react';
import './Quantity.css';

const Quantity = props => {
	let display = []
	for(let i=0; i<props.quantity; i++){
		display.push(<div key={i} className="quantityTaco" />)
	}
	return (
		<div className="quantity">
			{display}
		</div>
	)
}

export default Quantity;