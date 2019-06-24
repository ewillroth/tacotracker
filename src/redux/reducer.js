//initial state
const initialState = {
	tacos: [],
}

//action types
const GET_TACOS = "GET_TACOS"
const UPDATE_QUANTITY = "UPDATE_QUANTITY"
const UPDATE_RATING = "UPDATE_RATING"
const UPDATE_DESCRIPTION = "UPDATE_DESCRIPTION"
const UPDATE_PIC = "UPDATE_PIC"
const UPDATE_FROM = "UPDATE_FROM"

//action creators
export const getTacos = (tacos) => {
	return {
		type: GET_TACOS,
		payload: tacos
	}
}
export const updateQuantity = (quantity) => {
	return {
		type: UPDATE_QUANTITY,
		payload: quantity
	}
}
export const updateRating = (rating) => {
	return {
		type: UPDATE_RATING,
		payload: rating
	}
}
export const updateDescription = (description) => {
	return {
		type: UPDATE_DESCRIPTION,
		payload: description
	}
}
export const updatePic = (pic) => {
	return {
		type: UPDATE_PIC,
		payload: pic
	}
}
export const updateFrom = (from) => {
	return {
		type: UPDATE_FROM,
		payload: from
	}
}

//reducer
function reducer(state = initialState, action) {
	switch (action.type) {
		case GET_TACOS:
			return {
				...state,
				tacos: action.payload
			};
		case UPDATE_QUANTITY:
			return {
				...state,
				quantity: action.payload
			};
		case UPDATE_RATING:
			return {
				...state,
				rating: action.payload
			};
		case UPDATE_DESCRIPTION:
			return {
				...state,
				description: action.payload
			};
		case UPDATE_PIC:
			return {
				...state,
				pic: action.payload
			};
		case UPDATE_FROM:
			return {
				...state,
				from: action.payload
			};
		default:
			return state
	}
}

export default reducer;