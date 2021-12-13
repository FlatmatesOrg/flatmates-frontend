import axios from "axios";
export const GET_APARTMENT = "GET_APARTMENT";

export const getApartmentsUsingFilters = (
	addresses,
	price,
	noOfTenants,
	noOfRooms,
	duration,
	token
) => {
	return async (dispatch) => {
		try {
			console.log(addresses, price, noOfTenants, noOfRooms, duration);
			const response = await axios.post(
				"/property/getCustomProperty",
				{
					addresses,
					price,
					noOfTenants,
					noOfRooms,
					duration,
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
			console.log(response.data);
			dispatch({ type: GET_APARTMENT, payload: response.data.message });
		} catch (error) {
			console.log(error);
			throw new Error("Something went wrong");
		}
	};
};
