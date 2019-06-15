import React from 'react';

const Rating = props => {
	return (
		<div className={"rating" + props.rating} id="rating">
			<div className="star" id="star1" />
			<div className="star" id="star2" />
			<div className="star" id="star3" />
			<div className="star" id="star4" />
			<div className="star" id="star5" />
		</div>

	)
}

export default Rating;