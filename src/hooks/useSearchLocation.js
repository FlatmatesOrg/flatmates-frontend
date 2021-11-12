import { useState, useCallback } from "react";
import { googleApiKey } from "../config";

export default () => {
	const [items, setItems] = useState([]);

	const getSearchLocation = useCallback(async (query) => {
		const response = await fetch(
			`https://maps.googleapis.com/maps/api/place/textsearch/json?key=${googleApiKey}&query=${query}`
		);
		const responseJson = await response.json();
		// console.log(responseJson);
		const res = responseJson.results.map((result) => {
			return {
				address: `${result.formatted_address}`,
				id: result.place_id,
				name: result.name,
				coords: {
					lat: result.geometry.location.lat,
					lng: result.geometry.location.lng,
				},
				icon: result.icon,
			};
		});
		setItems(res);
	}, []);

	return [getSearchLocation, items, setItems];
};
