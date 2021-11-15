export const UPDATE_STEP_ONE = "UPDATE_STEP_ONE";
export const ADD_TYPE = "ADD_TYPE";
export const UPDATE_STEP_TWO = "UPDATE_STEP_TWO";

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

export const addType = (type) => {
	return async (dispatch) => {
		dispatch({
			type: ADD_TYPE,
			payload: { type },
		});
	};
};
