import React, { useRef, useState } from "react";
import {
	View,
	Text,
	SafeAreaView,
	ImageBackground,
	Platform,
	StyleSheet,
	TouchableOpacity,
	Image,
	ToastAndroid,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";
import PhoneInput from "react-native-phone-number-input";
import { Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import * as authActions from "../../store/actions/Auth";
export default function SignUpScreen({ navigation }) {
	const [value, setValue] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();
	const phoneInput = useRef(null);

	const sendOtpHandler = async () => {
		try {
			setIsLoading(true);
			const response = await dispatch(authActions.signUp(value));
			if (response && response.message) {
				if (Platform.OS === "android") {
					ToastAndroid.show(response.message, ToastAndroid.SHORT);
				} else {
					alert(response.message);
				}
				setIsLoading(false);
			} else {
				navigation.navigate("OTP", { phoneNumber: value, signUp: true });
			}
		} catch (error) {
			console.log(error);
			setIsLoading(false);
			alert("Something went wrong");
		}
	};

	return (
		<ImageBackground
			style={styles.container}
			source={require("../../../assets/images/TwoWomenRear.png")}
		>
			<TouchableOpacity onPress={() => navigation.navigate("GetStarted")}>
				<Entypo name="chevron-left" size={32} color={Colors.primary} />
			</TouchableOpacity>
			<Text style={styles.title}>Create an account</Text>
			<PhoneInput
				ref={phoneInput}
				defaultValue={value}
				defaultCode="IN"
				disableArrowIcon
				layout="first"
				containerStyle={{
					alignSelf: "center",
					borderRadius: 10,
					height: 60,
					width: "80%",
				}}
				textContainerStyle={{
					borderTopRightRadius: 10,
					borderBottomRightRadius: 10,
				}}
				onChangeText={(text) => {
					setValue(text);
				}}
				withDarkTheme
				withShadow
				autoFocus
			/>
			<Button
				loading={isLoading}
				disabled={
					!phoneInput.current?.isValidNumber(value) ||
					!phoneInput.current?.getCountryCode() === "IN"
				}
				onPress={() => sendOtpHandler()}
				dark
				color={Colors.secondary}
				style={styles.button}
				mode="contained"
				contentStyle={{ padding: 10 }}
			>
				Continue
			</Button>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fefcfd",
		paddingTop: 45,
	},
	button: {
		width: "80%",
		alignSelf: "center",
		marginTop: 50,
		borderRadius: 10,
	},
	image: {
		width: "100%",
		height: 300,
		position: "absolute",
		bottom: 0,
	},
	nextButton: {
		backgroundColor: Colors.secondary,
		alignSelf: "center",
		padding: 15,
		marginTop: "20%",
		borderRadius: 40,
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
});
