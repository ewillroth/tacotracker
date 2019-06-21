import React from 'react';
import Rating from '../Rating/Rating';
import Quantity from '../Quantity/Quantity';

const TacoCard = props => {
	let {taco, i, toggleEdit} = props
	return (
		<div>
			{/* <p className="label">Number of tacos</p> */}
			<Quantity quantity={taco.quantity} />
			{/* <p className="label">Rating</p> */}
			<Rating rating={taco.rating} />
			{/* <p className="label">Description</p> */}
			<div className="description">{taco.description}</div>
			{/* <p className="label">From</p> */}
			<div className="from">{taco.source}</div>
			<button onClick={()=>{toggleEdit(i)}}>Edit</button>
		</div>
	)
}

export default TacoCard;