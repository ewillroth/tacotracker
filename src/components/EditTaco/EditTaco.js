import React from 'react';

const EditTaco = props => {
	const onSubmit = e => {
		e.preventDefault()
		props.onSubmit(e, props.taco.taco_id)
	}
	return (
		<>
			<button onClick={props.cancelEdit}>Cancel</button>
			<form onSubmit={onSubmit}>
				<p>Quantity</p>
				<input 
					name="quantity" 
					onChange={props.onChange} 
					value={props.quantity} 
					type="number" >
				</input>
				<p>From</p>
				<input 
					name="source" 
					onChange={props.onChange} 
					value={props.source} 
					type="text" >
				</input>
				<p>Description</p>
				<input 
					name="description" 
					onChange={props.onChange} 
					value={props.description} 
					type="text" >
				</input>
				<p>Rating</p>
				<input 
					onChange={props.onChange} 
					value={props.rating} 
					type="range" 
					min="1" max="5" 
					name="rating" 
					list="ratinglist">
				</input>
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
	)
}

export default EditTaco
