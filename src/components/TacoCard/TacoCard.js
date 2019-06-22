import React from 'react';
import Rating from '../Rating/Rating';
import Quantity from '../Quantity/Quantity';
import './TacoCard.css'

const TacoCard = props => {
	let {taco, i, toggleEdit} = props
	return (
		<div className="tacoCard">
			<Quantity quantity={taco.quantity} />
			<Rating rating={taco.rating} />
			<div className="description">{taco.description}</div>
			<div className="from">{taco.source}</div>
			<button onClick={()=>{toggleEdit(i)}}>Edit</button>
		</div>
	)
}

export default TacoCard;