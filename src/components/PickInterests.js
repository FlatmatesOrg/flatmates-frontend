import React, { useRef, useEffect } from "react";
import { View, Text, Animated, Platform, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export default function PickInterests() {
	const headerAnim = useRef(new Animated.Value(1000)).current;
	const getAllInterests = () => {};
	useEffect(() => {
		Animated.spring(headerAnim, {
			toValue: 0,
			delay: 500,
			useNativeDriver: true,
		}).start();
	});
	return (
		<View>
			<Animated.Text
				style={[styles.header, { transform: [{ translateX: headerAnim }] }]}
			>
				Choose your interests
			</Animated.Text>
			<View style={styles.avatarContainer}>{getAllInterests()}</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-end",
		paddingTop: Platform.OS === "android" ? 25 : 25,
	},
	subContainer: {
		padding: 20,
		paddingBottom: 80,
		bottom: 0,
		width: "100%",
	},
	header: {
		fontSize: 24,
		margin: 20,
		marginBottom: 20,
		fontWeight: "bold",
		color: Colors.secondary,
	},
	input: {
		marginHorizontal: 40,
		marginVertical: 20,
		color: "#fff",
	},
	button: {
		alignSelf: "center",
		width: "80%",
		borderRadius: 10,
	},
});
