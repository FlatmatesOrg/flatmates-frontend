import { AUTHENTICATE_USER, DID_TRY_AUTO_LOGIN } from "../actions/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
	token: "",
	didTryAutoLogin: false,
	isAuth: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case DID_TRY_AUTO_LOGIN: {
			return {
				...state,
				didTryAutoLogin: true,
			};
		}
		case AUTHENTICATE_USER: {
			AsyncStorage.setItem("token", action.payload.token);

			return {
				...state,
				token: action.payload.token,
				isAuth: true,
			};
		}
		default: {
			return state;
		}
	}
};
