import React from 'react';
import './EditTaco.css'

const EditTaco = props => {
	const onSubmit = e => {
		e.preventDefault()
		props.onSubmit(e, props.taco.taco_id)
	}
	return (
		<div className="editTaco">
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
					autoComplete="off"
					type="text" >
				</input>
				<p>Description</p>
				<textarea 
					name="description" 
					onChange={props.onChange} 
					value={props.description} 
					rows="6"
					cols="40"
					autoComplete="off">
				</textarea>
				<p>Rating</p>
				<input 
					onChange={props.onChange} 
					value={props.rating} 
					type="range" 
					min="1" max="5" 
					name="rating" 
					list="ratinglist">
				</input>
				<div>
					<button onClick={props.cancelEdit}>Cancel</button>
					<button>Submit</button>
				</div>
			</form>
			<datalist id="ratinglist">
				<option value="1" />
				<option value="2" />
				<option value="3" />
				<option value="4" />
				<option value="5" />
			</datalist>
		</div>
	)
}

export default EditTaco
