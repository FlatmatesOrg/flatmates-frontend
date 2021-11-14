import AsyncStorage from "@react-native-async-storage/async-storage";
import { AUTHENTICATE_USER } from "../actions/Auth";
import { UPDATE_PROFILE_DETAILS } from "../actions/User";

const initialState = {
	_id: "",
	firstName: "",
	lastName: "",
	displayPicture: "",
	interests: [],
	locality: "",
	phoneNumber: "",
	age: "",
};

export default (state = initialState, action) => {
	switch (action.type) {
		case AUTHENTICATE_USER: {
			const {
				firstName,
				lastName,
				_id,
				interests,
				locality,
				phoneNumber,
				displayPicture,
				age,
			} = action.payload;
			return {
				...state,
				firstName,
				lastName,
				_id,
				interests,
				locality,
				phoneNumber,
				displayPicture,
				age,
			};
		}
		case UPDATE_PROFILE_DETAILS: {
			const { firstName, lastName, displayPicture, interests, locality, age } =
				action.payload;
			return {
				...state,
				firstName,
				lastName,
				interests,
				locality,
				displayPicture,
				age,
			};
		}
		default: {
			return state;
		}
	}
};
