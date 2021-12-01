export const UPDATE_STEP_ONE = "UPDATE_STEP_ONE";
export const ADD_TYPE = "ADD_TYPE";
export const UPDATE_STEP_THREE = "UPDATE_STEP_THREE";
export const UPDATE_STEP_TWO = "UPDATE_STEP_TWO";
export const SEND_REQUEST = "SEND_REQUEST";
import axios from "axios";
import mime from "mime";
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
	gallery,
	token
) => {
	console.log("Sending request");
	console.log({ title });
	console.log({
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
		token,
	});
	return async (dispatch) => {
		const data = new FormData();
		data.append("title", title);
		data.append("landmark", landmark);
		data.append("coordinates", JSON.stringify(coordinates));
		data.append("address", address);
		data.append("description", description);
		data.append("duration", duration);
		data.append("noOfTenants", noOfTenants);
		data.append("noOfRooms", noOfRooms);
		data.append("price", price);
		gallery.forEach((pic) => {
			data.append("gallery", {
				fileName: pic.filename,
				uri: pic.uri,
				type: mime.getType(pic.uri),
			});
		});
		console.log(data);
		const response = await axios.post("/property/addProperty", data, {
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "multipart/form-data",
			},
		});
		if (!response.data.success) {
			return { message: response.data.message };
		}
		// dispatch({
		// 	type: SEND_REQUEST,
		// });
	};
};
