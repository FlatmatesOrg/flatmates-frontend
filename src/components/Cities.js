import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import CityData from "../../Cities.json";
import { Surface } from "react-native-paper";

const City = ({ name, url, city, setCity }) => {
	return (
		<Surface
			style={[
				{ backgroundColor: city === name ? "rgb(201, 202, 203)" : "#fff" },
				styles.cityContainer,
			]}
		>
			<TouchableOpacity
				onPress={() => setCity(name)}
				style={{ width: "100%", alignItems: "center" }}
			>
				<Image
					resizeMode="contain"
					style={{ width: "100%", height: 40 }}
					source={{ uri: url }}
				/>
				<Text style={styles.text}>{name}</Text>
			</TouchableOpacity>
		</Surface>
	);
};

export default function Cities({ city, setCity }) {
	const getAllCities = () => {
		return CityData.map((xcity) => {
			return (
				<City setCity={setCity} city={city} name={xcity.name} url={xcity.url} />
			);
		});
	};
	return <View style={styles.container}>{getAllCities()}</View>;
}

const styles = StyleSheet.create({
	container: {
		flexWrap: "wrap",
		flexDirection: "row",
		marginTop: 20,
		marginLeft: "5%",
	},
	cityContainer: {
		elevation: 3,
		borderRadius: 10,
		marginVertical: 5,
		marginHorizontal: 10,
		paddingHorizontal: 10,
		paddingVertical: 15,
		width: "25%",
		alignItems: "center",
	},
	text: {
		fontSize: 12,
		color: "rgb(77, 76, 76)",
	},
});
