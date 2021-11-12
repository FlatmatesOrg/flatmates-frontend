import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
	View,
	Text,
	SafeAreaView,
	Platform,
	StyleSheet,
	Animated,
	ImageBackground,
} from "react-native";

import InputSpinner from "react-native-input-spinner";
import { TextInput, Avatar, Button } from "react-native-paper";
import Colors from "../constants/Colors";

export default function PickName({
	pickNameHandler,
	firstName,
	lastName,
	setLastName,
	setFirstName,
	age,
	setAge,
}) {
	const userDetails = useSelector((state) => state.User);
	const headerAnim = useRef(new Animated.Value(1000)).current;
	const textFieldAnim = useRef(new Animated.Value(1000)).current;
	useEffect(() => {
		Animated.spring(headerAnim, {
			toValue: 0,
			damping: 20,
			useNativeDriver: true,
		}).start();
		Animated.spring(textFieldAnim, {
			toValue: 0,
			delay: 300,
			useNativeDriver: true,
		}).start();
	}, [headerAnim, textFieldAnim]);

	return (
		<View style={styles.container}>
			<Animated.Text
				style={[styles.header, { transform: [{ translateX: headerAnim }] }]}
			>
				What should we call you?
			</Animated.Text>
			<Animated.View
				style={[
					styles.subContainer,
					{ transform: [{ translateX: textFieldAnim }] },
				]}
			>
				<TextInput
					style={styles.input}
					label="First Name"
					value={firstName}
					underlineColor={Colors.primary}
					theme={{
						colors: {
							primary: Colors.secondary,
							background: "transparent",
							placeholder: Colors.primary,
							text: Colors.secondary,
						},
					}}
					placeholderTextColor="#fff"
					onChangeText={(text) => setFirstName(text)}
				/>
				<TextInput
					style={styles.input}
					label="Last Name"
					value={lastName}
					underlineColor={Colors.primary}
					theme={{
						colors: {
							primary: Colors.secondary,
							background: "transparent",
							placeholder: Colors.primary,
							text: Colors.secondary,
						},
					}}
					placeholderTextColor="#fff"
					onChangeText={(text) => setLastName(text)}
				/>
				<View style={{ height: "10%" }} />

				<InputSpinner
					max={70}
					min={18}
					step={1}
					type="float"
					rounded={true}
					showBorder={false}
					colorMax={Colors.secondary}
					colorMin={Colors.secondary}
					value={age}
					onChange={(num) => {
						setAge(num);
					}}
					style={{ alignItems: "center", width: 200, alignSelf: "center" }}
					inputStyle={{ fontSize: 24 }}
					textColor={Colors.secondary}
					buttonTextColor="#fff"
					buttonPressStyle={{
						backgroundColor: Colors.secondary,
						width: 50,
						height: 50,
					}}
					buttonStyle={{
						width: 50,
						height: 50,
						backgroundColor: "transparent",
					}}
				/>
				<View style={{ height: "10%" }} />
				<Button
					onPress={() => pickNameHandler()}
					dark
					color={Colors.secondary}
					style={styles.button}
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
