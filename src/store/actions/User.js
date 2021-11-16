import axios from "axios";
export const UPDATE_PROFILE_DETAILS = "UPDATE_PROFILE_DETAILS";

export const updateUser = (
	token,
	firstName,
	lastName,
	displayPicture,
	age,
	interests,
	locality
) => {
	return async (dispatch) => {
		try {
			const response = await axios.post(
				"/user/setUserProfile",
				{
					firstName,
					lastName,
					displayPicture,
					age,
					interests,
					locality,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			if (!response.data.success) {
				return { message: response.data.message };
			}
			dispatch({
				type: UPDATE_PROFILE_DETAILS,
				payload: {
					firstName,
					lastName,
					displayPicture,
					age,
					interests,
					locality,
				},
			});
		} catch (error) {
			console.log(error);
			throw new Error("Something went wrong");
		}
	};
};
