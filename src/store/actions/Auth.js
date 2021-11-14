import axios from "axios";

export const DID_TRY_AUTO_LOGIN = "DID_TRY_AUTO_LOGIN";
export const AUTHENTICATE_USER = "AUTHENTICATE_USER";

export const setDidTryAutoLogin = () => {
	return async (dispatch) => {
		dispatch({ type: DID_TRY_AUTO_LOGIN });
	};
};

export const autoLogin = (token) => {
	return async (dispatch) => {
		try {
			const response = await axios.get("/auth/autoLogin", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			console.log(response.data);
			dispatch({
				type: AUTHENTICATE_USER,
				payload: { ...response.data },
			});
		} catch (error) {
			console.log(error);
			throw new Error("Something went wrong");
		}
	};
};

export const signUp = (phoneNumber) => {
	return async (dispatch) => {
		try {
			const response = await axios.post("/auth/signup", {
				phoneNumber,
			});
			if (!response.data.success) {
				return { message: response.data.message };
			}
		} catch (error) {
			console.log(error);
			throw new Error("Something went wrong");
		}
	};
};

export const signUpVerify = (phoneNumber, otp) => {
	return async (dispatch) => {
		try {
			const response = await axios.post("/auth/verifySignup", {
				phoneNumber,
				otp,
			});
			console.log(response.data);
			if (!response.data.success) {
				return { message: response.data.message };
			}
			dispatch({
				type: AUTHENTICATE_USER,
				payload: { ...response.data },
			});
		} catch (error) {
			console.log(error);
			throw new Error("Something went wrong");
		}
	};
};

export const login = (phoneNumber) => {
	return async (dispatch) => {
		try {
			const response = await axios.post("/auth/login", {
				phoneNumber,
			});
			if (!response.data.success) {
				return { message: response.data.message };
			}
		} catch (error) {
			console.log(error);
			throw new Error("Something went wrong");
		}
	};
};

export const loginVerify = (phoneNumber, otp) => {
	return async (dispatch) => {
		try {
			const response = await axios.post("/auth/verifyLogin", {
				phoneNumber,
				otp,
			});
			if (!response.data.success) {
				return response.data.message;
			}
			dispatch({
				type: AUTHENTICATE_USER,
				payload: { ...response.data },
			});
		} catch (error) {
			console.log(error);
			throw new Error("Something went wrong");
		}
	};
};
