import { useState } from "react";
import { googleApiKey } from "../config";

export default () => {
	const [error, setError] = useState(false);

	const getReadableLocation = async (lat, lng) => {
		try {
			const response = await fetch(
				`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&result_type=street_address|route|intersection|locality|neighborhood|premise|subpremise|point_of_interest&key=${googleApiKey}`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application.json",
					},
				}
			);
			const responseJson = await response.json();
			// console.log(responseJson);
			return {
				formattedAddress: responseJson.results[0].formatted_address,
			};
		} catch (error) {
			setError(true);
		}
	};

	return [getReadableLocation, error];
};
