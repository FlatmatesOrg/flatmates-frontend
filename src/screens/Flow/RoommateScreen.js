import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Feather, Entypo } from "@expo/vector-icons";
import {
	View,
	Text,
	ImageBackground,
	StyleSheet,
	Platform,
	TouchableOpacity,
} from "react-native";

export default function RoommateScreen({ navigation }) {
	return (
		<ImageBackground
			style={styles.container}
			blurRadius={5}
			resizeMode="contain"
			source={require("../../../assets/images/HomeCartoon.png")}
		>
			<LinearGradient
				colors={["rgba(0,0,0,0.5)", "rgba(0,0,0,0.5)"]}
				start={{ x: 0, y: 0 }}
				end={{ x: 0.4, y: 0.8 }}
				style={{
					position: "absolute",
					opacity: 1,
					width: "100%",
					height: "120%",
				}}
			></LinearGradient>
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
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 45,
		backgroundColor: "#fff",
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginHorizontal: "5%",
	},
});
