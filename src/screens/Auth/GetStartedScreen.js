import React from "react";
import { Image, Text, SafeAreaView, Platform, StyleSheet } from "react-native";
import Fonts from "../../constants/Fonts";
import { Button } from "react-native-paper";
import Colors from "../../constants/Colors";

export default function MainScreen({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.logo}>Flatmates</Text>
			<Text style={styles.subtitle}>Find your places</Text>
			<Button
				onPress={() => navigation.navigate("Login")}
				dark
				color={Colors.secondary}
				style={styles.button}
				mode="contained"
				contentStyle={{ padding: 10 }}
			>
				LogIn
			</Button>
			<Text style={styles.smallText}>or</Text>
			<Button
				contentStyle={{ padding: 10 }}
				onPress={() => navigation.navigate("SignUp")}
				color={Colors.secondary}
				style={styles.button}
				mode="outlined"
			>
				Create an account
			</Button>
			<Image
				resizeMode="cover"
				style={styles.image}
				source={require("../../../assets/images/TwoWomenRear.png")}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fefcfd",
		paddingTop: Platform.OS === "android" ? 25 : 0,
	},
	image: {
		width: "100%",
		height: 300,
		position: "absolute",
		bottom: 0,
	},
	button: {
		width: "70%",
		alignSelf: "center",
		marginVertical: 10,
		borderRadius: 18,
	},
	logo: {
		marginTop: "30%",
		fontFamily: Fonts.logo,
		fontSize: 70,
		textAlign: "center",
		color: Colors.primary,
	},
	smallText: {
		color: "#888",
		textAlign: "center",
		marginVertical: 10,
	},
	subtitle: {
		textTransform: "uppercase",
		fontSize: 18,
		textAlign: "right",
		width: "80%",

		color: Colors.primary,
		transform: [{ translateY: -20 }],
	},
});