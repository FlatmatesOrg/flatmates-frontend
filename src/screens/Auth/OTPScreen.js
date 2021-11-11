import React, { useState } from "react";
import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	Platform,
	TouchableOpacity,
	Image,
} from "react-native";
import Colors from "../../constants/Colors";
import { Entypo } from "@expo/vector-icons";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { Button } from "react-native-paper";
export default function OTPScreen({ route, navigation }) {
	const [code, setCode] = useState("");
	const { phoneNumber, signUp } = route.params;

	return (
		<SafeAreaView style={styles.container}>
			<TouchableOpacity onPress={() => navigation.navigate("GetStarted")}>
				<Entypo name="chevron-left" size={32} color={Colors.primary} />
			</TouchableOpacity>
			<Text style={styles.title}>Verification Code</Text>
			<Text style={styles.subtitle}>
				Enter the verification code sent to the number{" "}
				<Text>(+91){phoneNumber}</Text>
			</Text>

			<OTPInputView
				style={{ width: "60%", height: "15%", alignSelf: "center" }}
				pinCount={4}
				code={code}
				onCodeChanged={(code) => setCode(code)}
				autoFocusOnLoad
				codeInputFieldStyle={styles.underlineStyleBase}
				codeInputHighlightStyle={styles.underlineStyleHighLighted}
				onCodeFilled={(code) => {
					console.log(`Code is ${code}, you are good to go!`);
				}}
			/>
			<View style={{ height: "5%" }} />
			<Button
				dark
				color={Colors.secondary}
				style={styles.button}
				mode="contained"
				contentStyle={{ padding: 10 }}
			>
				Continue
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
	button: {
		width: "80%",
		alignSelf: "center",
		borderRadius: 10,
	},
	image: {
		width: "100%",
		height: 300,
		position: "absolute",
		bottom: 0,
	},
	title: {
		color: Colors.secondary,
		fontSize: 28,
		fontWeight: "bold",
		letterSpacing: 1,
		padding: 10,
		margin: 20,
		marginBottom: "20%",
	},
	subtitle: {
		color: Colors.primary,
		width: "60%",
		alignSelf: "center",
		textAlign: "center",
		fontSize: 18,
		letterSpacing: 1,
		fontWeight: "200",
	},
	underlineStyleBase: {
		width: 45,
		height: 45,
		borderWidth: 0,
		fontSize: 24,
		borderBottomWidth: 1,
		padding: 10,
		color: Colors.secondary,
	},

	underlineStyleHighLighted: {
		borderColor: Colors.secondary,
	},
});
