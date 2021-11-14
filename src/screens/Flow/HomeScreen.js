import React from "react";
import { SafeAreaView, Text } from "react-native";
import { useSelector } from "react-redux";

export default function HomeScreen() {
	const user = useSelector((state) => state.User);
	console.log(user);
	return (
		<SafeAreaView>
			<Text>Home</Text>
		</SafeAreaView>
	);
}
