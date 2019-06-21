import React from 'react';
import './Rating.css';

const Rating = props => {
	let display = []
	for (let i=0; i<5; i++){
		display.push(<div key={i} className="emptyStar"/>)
	}
	for (let i = 0; i<props.rating; i++){
		display[i] = <div key={i} className="star" />
	}
	return (
		<div className="rating">
			{display}
		</div>

	)
}

export default Rating;