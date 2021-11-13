import React, { useRef, useEffect } from "react";
import {
	View,
	Text,
	Animated,
	Platform,
	StyleSheet,
	FlatList,
} from "react-native";
import Colors from "../constants/Colors";
import AnimatedChip from "./AnimatedInterest";
import { Button } from "react-native-paper";

export default function PickInterests({ interests, setInterests }) {
	const headerAnim = useRef(new Animated.Value(1000)).current;

	useEffect(() => {
		Animated.spring(headerAnim, {
			toValue: 0,
			delay: 500,
			useNativeDriver: true,
		}).start();
	});

	return (
		<View>
			<FlatList
				ListHeaderComponent={
					<Animated.Text
						style={[styles.header, { transform: [{ translateX: headerAnim }] }]}
					>
						Choose your interests
					</Animated.Text>
				}
				data={intr}
				contentContainerStyle={{ paddingBottom: 100 }}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item, index }) => (
					<AnimatedChip
						interests={interests}
						setInterests={setInterests}
						label={item.label}
						url={item.url}
						index={index}
					/>
				)}
			/>
			{interests.length > 0 && (
				<View
					style={{
						position: "absolute",
						bottom: 0,
						zIndex: 10,
						backgroundColor: "red",
					}}
				>
					<Button>Confirm Interests</Button>
				</View>
			)}
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

const intr = [
	{
		label: "Dancing",
	},
	{ label: "Art" },
	{ label: "Travel" },
	{ label: "Blogging" },
	{ label: "Sports" },
	{ label: "Reading" },
	{ label: "Yoga" },
	{ label: "Theater" },
	{ label: "Technology" },
	{ label: "Writing" },
	{ label: "Poetry" },
	{ label: "Music" },
	{ label: "Space" },
	{ label: "Fiction" },
	{ label: "Painting" },
	{ label: "Shopping" },
	{ label: "Trekking" },
	{ label: "Singing" },
	{ label: "Food" },
	{ label: "Movie" },
];
