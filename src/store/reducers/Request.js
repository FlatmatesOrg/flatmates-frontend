import {
	ADD_TYPE,
	UPDATE_STEP_ONE,
	UPDATE_STEP_THREE,
	UPDATE_STEP_TWO,
} from "../actions/Request";

const initialState = {
	type: "",
	title: "",
	landmark: "",
	coordinates: { latitude: "", longitude: "" },
	address: "",
	description: "",
	duration: "",
	noOfTenants: "",
	noOfRooms: "",
	price: "",
	gallery: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_TYPE: {
			return {
				...state,
				type: action.payload.type,
			};
		}
		case UPDATE_STEP_THREE: {
			return {
				...state,
				duration: action.payload.duration,
				noOfTenants: action.payload.noOfTenants,
				noOfRooms: action.payload.noOfRooms,
				price: action.payload.price,
			};
		}
		case UPDATE_STEP_TWO: {
			return {
				...state,
				description: action.payload.description,
				gallery: action.payload.gallery,
			};
		}
		case UPDATE_STEP_ONE: {
			return {
				...state,
				title: action.payload.title,
				landmark: action.payload.landmark,
				coordinates: action.payload.coords,
				address: action.payload.address,
			};
		}
		default: {
			return state;
		}
	}
};
