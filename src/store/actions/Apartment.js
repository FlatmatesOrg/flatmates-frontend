export const GET_APARTMENT = "GET_APARTMENT";

export const getApartmentsUsingFilters = (
	addresses,
	price,
	noOfTenants,
	noOfRooms,
	duration
) => {
	return async (dispatch) => {
		try {
			console.log(addresses, price, noOfTenants, noOfRooms, duration);
			// const response = await axios.post("/", {
			// 	addresses,
			// 	price,
			// 	noOfTenants,
			// 	noOfRooms,
			// 	duration,
			// });
			// if (!response.data.success) {
			// 	return { message: response.data.message };
			// }
			// dispatch({ type: GET_APARTMENT, payload: response.data.apartments });
		} catch (error) {
			console.log(error);
			throw new Error("Something went wrong");
		}
	};
};
