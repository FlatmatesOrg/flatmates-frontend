import React, { useState } from "react";
import {
	SafeAreaView,
	Text,
	StyleSheet,
	Platform,
	TouchableOpacity,
} from "react-native";
import { Button, Searchbar } from "react-native-paper";
import { useSelector } from "react-redux";
import { Feather } from "@expo/vector-icons";
import Cities from "../../components/Cities";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

export default function HomeScreen() {
	const user = useSelector((state) => state.User);
	const [city, setCity] = useState();
	return (
		<SafeAreaView style={styles.container}>
			<TouchableOpacity style={{ alignSelf: "flex-end", marginRight: "5%" }}>
				<Feather name="align-right" size={32} color="black" />
			</TouchableOpacity>
			<Text style={styles.title}>
				Find {"\n"}your ideal {"\n"}location.
			</Text>
			<Cities setCity={setCity} city={city} />
			<Button
				onPress={() => {}}
				dark
				color={Colors.secondary}
				style={styles.button}
				mode="contained"
				contentStyle={{ padding: 10 }}
			>
				Continue
			</Button>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? 45 : 0,
	},
	title: {
		fontSize: 40,
		color: "#000",
		marginTop: "10%",
		marginLeft: "5%",
	},
	button: {
		width: "80%",
		alignSelf: "center",
		marginTop: 50,
		borderRadius: 10,
	},
});
