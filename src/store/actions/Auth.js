export const DID_TRY_AUTO_LOGIN = "DID_TRY_AUTO_LOGIN";

export const setDidTryAutoLogin = () => {
	return async (dispatch) => {
		dispatch({ type: DID_TRY_AUTO_LOGIN });
	};
};
