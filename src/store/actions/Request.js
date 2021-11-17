export const UPDATE_STEP_ONE = "UPDATE_STEP_ONE";
export const ADD_TYPE = "ADD_TYPE";
export const UPDATE_STEP_THREE = "UPDATE_STEP_THREE";
export const UPDATE_STEP_TWO = "UPDATE_STEP_TWO";
export const SEND_REQUEST = "SEND_REQUEST";
import axios from "axios";
export const updateStepOne = (title, landmark, coords, address) => {
	return async (dispatch) => {
		dispatch({
			type: UPDATE_STEP_ONE,
			payload: { title, landmark, coords, address },
		});
	};
};

export const updateStepTwo = (description, gallery) => {
	return async (dispatch) => {
		dispatch({
			type: UPDATE_STEP_TWO,
			payload: { description, gallery },
		});
	};
};

export const updateStepThree = (noOfTenants, noOfRooms, price, duration) => {
	return async (dispatch) => {
		dispatch({
			type: UPDATE_STEP_THREE,
			payload: { noOfTenants, noOfRooms, price, duration },
		});
	};
};

export const addType = (type) => {
	return async (dispatch) => {
		dispatch({
			type: ADD_TYPE,
			payload: { type },
		});
	};
};

export const sendRequest = (
	title,
	landmark,
	coordinates,
	address,
	description,
	duration,
	noOfTenants,
	noOfRooms,
	price,
	gallery
) => {
	return async (dispatch) => {
		const response = await axios.post(
			"/property/addProperty",
			{
				title,
				landmark,
				coordinates,
				address,
				description,
				duration,
				noOfTenants,
				noOfRooms,
				price,
				gallery,
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "multipart/form-data",
					"Content-Type": "application/json",
				},
			}
		);
		if (!response.data.success) {
			return { message: response.data.message };
		}
		dispatch({
			type: SEND_REQUEST,
		});
	};
};
