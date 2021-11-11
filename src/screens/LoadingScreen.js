import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import Colors from "../constants/Colors";

export default function LoadingScreen() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<LottieView
				style={{ width: "60%" }}
				source={require("../../assets/loading.json")}
				autoPlay
				loop
			/>
		</View>
	);
}
