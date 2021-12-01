import React, { useState } from "react";
import {
	SafeAreaView,
	Text,
	StyleSheet,
	Platform,
	View,
	TouchableOpacity,
	ToastAndroid,
} from "react-native";
import { Button, Searchbar } from "react-native-paper";
import { useSelector } from "react-redux";
import { Feather, Entypo } from "@expo/vector-icons";
import Cities from "../../components/Cities";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

export default function HomeScreen({ route, navigation }) {
	const user = useSelector((state) => state.User);
	const type = useSelector((state) => state.Request.type);
	const [city, setCity] = useState();
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.row}>
				<TouchableOpacity
					onPress={() => navigation.goBack()}
					style={{
						backgroundColor: "rgb(201, 202, 203)",
						borderRadius: 14,
						padding: 4,
					}}
				>
					<Entypo name="chevron-small-left" size={24} color="black" />
				</TouchableOpacity>
				<TouchableOpacity>
					<Feather name="align-right" size={32} color="black" />
				</TouchableOpacity>
			</View>
			<Text style={styles.title}>
				Find {"\n"}your ideal {"\n"}location.
			</Text>
			<Cities setCity={setCity} city={city} />
			<Button
				onPress={() => {
					if (!city) {
						if (Platform.OS === "android") {
							ToastAndroid.show("Select a city", ToastAndroid.SHORT);
						} else {
							alert("Select a city");
						}
						return;
					}
					if (type === "Apartment") {
						navigation.navigate("Filter", {
							city: city,
						});
					} else {
						navigation.navigate("Location", { city: city });
					}
				}}
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
		fontFamily: Fonts.title,
	},
	button: {
		width: "80%",
		alignSelf: "center",
		marginTop: 50,
		borderRadius: 10,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginHorizontal: "5%",
	},
});
