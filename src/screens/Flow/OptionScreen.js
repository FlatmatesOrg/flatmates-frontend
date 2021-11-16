import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import {
	View,
	Text,
	ImageBackground,
	StyleSheet,
	Animated,
	Platform,
	TouchableOpacity,
} from "react-native";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import * as requestActions from "../../store/actions/Request";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function OptionScreen({ navigation }) {
	const dispatch = useDispatch();
	const onSubmit = (type) => {
		dispatch(requestActions.addType(type));
		navigation.navigate("City");
	};

	return (
		<ImageBackground
			imageStyle={{
				opacity: 0.5,
				position: "absolute",
				bottom: 0,
				right: -100,
			}}
			resizeMode="cover"
			resizeMethod="resize"
			blurRadius={5}
			source={{
				uri: "https://img.freepik.com/free-photo/rear-view-two-male-hiker-overlooking-mountain-view_23-2148182867.jpg?size=626&ext=jpg&ga=GA1.2.195577518.1636641094",
			}}
			style={styles.container}
		>
			<Text style={styles.logo}>Flatmates</Text>
			<Text style={styles.tagline}>
				Have a flat in mind? Or just looking for friends
			</Text>
			<View style={styles.border} />
			<Text style={styles.text}>Get Started</Text>
			<View style={styles.row}>
				<TouchableOpacity
					onPress={() => onSubmit("Roommate")}
					style={styles.iconContainer}
				>
					<AntDesign name="addusergroup" size={24} color="#fff" />
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => onSubmit("Apartment")}
					style={styles.iconContainer}
				>
					<MaterialIcons name="apartment" size={24} color="#fff" />
				</TouchableOpacity>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",

		alignItems: "center",
		justifyContent: "center",
		paddingTop: Platform.OS === "android" ? 25 : 25,
	},
	logo: {
		marginTop: "30%",
		fontFamily: Fonts.logo,
		fontSize: 60,
		textAlign: "center",
		color: Colors.primary,
		position: "absolute",
		top: 0,
	},
	tagline: {
		marginTop: "10%",
		fontSize: 24,
		textAlign: "center",
		width: "60%",
		fontFamily: Fonts.title,
	},
	text: {
		marginTop: 5,
		fontSize: 18,
	},
	border: {
		backgroundColor: Colors.secondary,
		height: 7,
		borderRadius: 10,
		width: "27%",
		marginTop: "20%",
	},
	row: {
		marginTop: 25,
		flexDirection: "row",
		alignItems: "center",
	},
	iconContainer: {
		backgroundColor: "rgba(76, 76, 76,0.7)",
		marginHorizontal: 10,
		paddingHorizontal: 50,
		paddingVertical: 10,
		borderRadius: 10,
	},
});
