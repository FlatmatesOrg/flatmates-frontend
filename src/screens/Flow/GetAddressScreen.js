import React, { useState } from "react";
import {
	SafeAreaView,
	Text,
	StyleSheet,
	FlatList,
	Platform,
	TouchableOpacity,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import useSearchLocation from "../../hooks/useSearchLocation";
import AnimatedLocation from "../../components/AnimatedLocation";
export default function GetAddressScreen({ navigation }) {
	const [getSearchLocation, items, setItems] = useSearchLocation();
	const [locality, setLocality] = useState("");
	const pickLocationHandler = (address) => {
		let t = address.split("#");
		navigation.navigate("Filter", { local: t[0] });
	};
	return (
		<SafeAreaView style={styles.container}>
			<TouchableOpacity
				onPress={() => navigation.goBack()}
				style={styles.backButtonStyle}
			>
				<Entypo name="chevron-small-left" size={24} color="black" />
			</TouchableOpacity>
			<Searchbar
				style={{
					marginVertical: 25,
					marginHorizontal: 15,
					borderRadius: 10,
					overflow: "hidden",
				}}
				placeholder="I am from.."
				onChangeText={getSearchLocation}
			/>
			<FlatList
				data={items}
				renderItem={({ item, index }) => {
					return (
						<AnimatedLocation
							index={index}
							item={item}
							titleOnly={true}
							setLocality={setLocality}
							pickLocationHandler={pickLocationHandler}
						/>
					);
				}}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#e4e4e4",
		paddingTop: Platform.OS === "android" ? 50 : 0,
	},
	backButtonStyle: {
		marginLeft: 20,
		alignSelf: "flex-start",
		padding: 4,
		backgroundColor: "rgba(201, 202, 203,0.7)",
		borderRadius: 14,
		overflow: "hidden",
	},
});
