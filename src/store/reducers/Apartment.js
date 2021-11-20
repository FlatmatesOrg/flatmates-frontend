import { GET_APARTMENT } from "../actions/Apartment";

const initialState = {
	apartments: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_APARTMENT: {
			return {
				...state,
				apartments: action.payload,
			};
		}
		default: {
			return state;
		}
	}
};
