import React, { useEffect, useRef } from "react";
import {
	View,
	Text,
	Animated,
	TouchableOpacity,
	Platform,
	StyleSheet,
	Image,
} from "react-native";
import { Chip } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";

export default function AnimatedChip({
	label,
	index,
	url,
	interests,
	setInterests,
}) {
	const chipAnim = useRef(new Animated.Value(1000)).current;
	useEffect(() => {
		Animated.timing(chipAnim, {
			toValue: 0,
			duration: 500,
			delay: index * 100,
			useNativeDriver: true,
		}).start();
	});
	return (
		<Animated.View
			key={index}
			style={{
				transform: [{ translateX: chipAnim }],
				margin: 5,
				width: "90%",
				alignSelf: "center",
			}}
		>
			<TouchableOpacity
				style={{
					// backgroundColor: "#303344",
					backgroundColor: "rgba(76, 76, 76,0.6)",
					padding: 15,
					borderRadius: 10,
					flexDirection: "row",
					alignItems: "center",
					borderWidth: 2,
					borderColor: interests.includes(label)
						? Colors.secondary
						: "transparent",
				}}
				onPress={() => {
					if (interests.includes(label)) {
						setInterests((interests) =>
							interests.filter((interest) => interest !== label)
						);
					} else {
						setInterests((interests) => [...interests, label]);
					}
				}}
			>
				<Image
					resizeMode="contain"
					source={{
						uri: `https://assets147.s3.us-east-2.amazonaws.com/${
							label.charAt(0).toLowerCase() + label.slice(1)
						}.jpg`,
					}}
					style={{ height: 50, width: 50, borderRadius: 10, marginRight: 20 }}
				/>
				<Text style={styles.text}>{label}</Text>
				{interests.includes(label) && (
					<AntDesign
						style={{ position: "absolute", right: 20 }}
						name="checkcircle"
						size={24}
						color={Colors.secondary}
					/>
				)}
			</TouchableOpacity>
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	text: {
		color: "#fff",
		fontSize: 18,
	},
});
