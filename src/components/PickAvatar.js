import React, { useEffect, useRef, useState } from "react";
import {
	View,
	Text,
	Animated,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { Avatar, Button } from "react-native-paper";
import Colors from "../constants/Colors";
import AnimatedAvatar from "./AnimatedAvatar";

export default function PickAvatar({
	pickAvatarHandler,
	displayPicture,
	setDisplayPicture,
}) {
	const headerAnim = useRef(new Animated.Value(1000)).current;
	const buttonAnim = useRef(new Animated.Value(1000)).current;
	const avatarAnim = useRef(new Animated.Value(1000)).current;

	const getAllAvatars = () => {
		return ava.map((a, i) => {
			return (
				<AnimatedAvatar
					displayPicture={displayPicture}
					setDisplayPicture={setDisplayPicture}
					key={i}
					a={a}
					index={i}
				/>
			);
		});
	};

	useEffect(() => {
		Animated.spring(headerAnim, {
			toValue: 0,
			delay: 500,
			useNativeDriver: true,
		}).start();
		Animated.spring(buttonAnim, {
			toValue: 0,
			delay: 500,
			useNativeDriver: true,
		}).start();
		Animated.timing(avatarAnim, {
			toValue: 0,
			duration: 500,
			delay: 900,
			useNativeDriver: true,
		}).start();
	});

	return (
		<View style={styles.container}>
			<Animated.Text
				style={[styles.header, { transform: [{ translateX: headerAnim }] }]}
			>
				Pick your avatar
			</Animated.Text>
			{/* <Avatar.Text style={{ alignSelf: "center" }} size={54} label="XD" /> */}
			<View style={styles.avatarContainer}>
				{getAllAvatars()}
				{/* <Animated.View style={{ transform: [{ translateX: avatarAnim }] }}>
					<TouchableOpacity>
						<Avatar.Icon style={styles.avatar} size={64} icon="camera" />
					</TouchableOpacity>
				</Animated.View> */}
			</View>

			<View style={{ height: "10%" }} />
			<Animated.View>
				<Button
					style={[styles.button, { transform: [{ translateX: buttonAnim }] }]}
					onPress={() => {
						pickAvatarHandler();
					}}
					dark
					color={Colors.secondary}
					mode="contained"
					contentStyle={{ padding: 10 }}
				>
					Continue
				</Button>
			</Animated.View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		paddingTop: Platform.OS === "android" ? 25 : 25,
		paddingBottom: "20%",
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
	avatarContainer: {
		flexWrap: "wrap",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
	},
	avatar: {
		margin: 10,

		backgroundColor: "#fff",
	},
});

const ava = [
	{
		src: "https://assets147.s3.us-east-2.amazonaws.com/ToyFaces_Tansparent_BG_29.png",
	},
	{
		src: "https://assets147.s3.us-east-2.amazonaws.com/ToyFaces_Tansparent_BG_32.png",
	},
	{
		src: "https://assets147.s3.us-east-2.amazonaws.com/ToyFaces_Tansparent_BG_37.png",
	},
	{
		src: "https://assets147.s3.us-east-2.amazonaws.com/ToyFaces_Tansparent_BG_8.png",
	},
	{
		src: "https://assets147.s3.us-east-2.amazonaws.com/ToyFaces_Tansparent_BG_47.png",
	},
	{
		src: "https://assets147.s3.us-east-2.amazonaws.com/ToyFaces_Tansparent_BG_49.png",
	},
	{
		src: "https://assets147.s3.us-east-2.amazonaws.com/ToyFaces_Tansparent_BG_56.png",
	},
	{
		src: "https://assets147.s3.us-east-2.amazonaws.com/ToyFaces_Tansparent_BG_59.png",
	},
];
