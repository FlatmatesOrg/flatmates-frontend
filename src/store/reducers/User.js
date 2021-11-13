import AsyncStorage from "@react-native-async-storage/async-storage";
import { AUTHENTICATE_USER } from "../actions/Auth";

const initialState = {
	_id: "",
	firstName: "",
	lastName: "",
	interests: [],
	locality: "",
	phoneNumber: "",
	type: "",
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
				type,
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
				type,
				age,
			};
		}
		default: {
			return state;
		}
	}
};
