import React, { useEffect, useRef, useState } from "react";
import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	Platform,
	TouchableOpacity,
	Image,
	Animated,
} from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import Colors from "../../constants/Colors";
import InputSpinner from "react-native-input-spinner";
import Fonts from "../../constants/Fonts";
import { useDispatch } from "react-redux";
import Slider from "@react-native-community/slider";
import * as requestActions from "../../store/actions/Request";

export default function StepThreeScreen({ navigation }) {
	const [onDuration, setOnDuration] = useState(true);
	const [onTenants, setOnTenants] = useState(false);
	const [onRooms, setOnRooms] = useState(false);
	const [onPrice, setOnPrice] = useState(false);
	const [price, setPrice] = useState(0);
	const [duration, setDuration] = useState(0);
	const [tenants, setTenants] = useState(0);
	const [rooms, setRooms] = useState(0);
	const dispatch = useDispatch();
	let imageAnim = useRef(new Animated.Value(1000)).current;
	let compAnim = useRef(new Animated.Value(1000)).current;
	const callNextHandler = () => {
		if (onDuration) {
			setOnDuration(false);
			setOnTenants(true);
		} else if (onTenants) {
			setOnTenants(false);
			setOnRooms(true);
		} else if (onRooms) {
			setOnRooms(false);
			setOnPrice(true);
		} else {
			dispatch(requestActions.updateStepThree(tenants, rooms, price, duration));
			navigation.navigate("PreviewScreen");
		}
	};

	const goBackHandler = () => {
		if (onDuration) {
			navigation.goBack();
		} else if (onTenants) {
			setOnDuration(true);
			setOnTenants(false);
		} else if (onRooms) {
			setOnTenants(true);
			setOnRooms(false);
		} else if (onPrice) {
			setOnRooms(true);
			setOnPrice(false);
		}
	};

	useEffect(() => {
		imageAnim.setValue(1000);
		compAnim.setValue(1000);
		Animated.timing(imageAnim, {
			toValue: 0,
			duration: 1000,
			delay: 100,
			useNativeDriver: true,
		}).start();
		Animated.timing(compAnim, {
			toValue: 0,
			duration: 1000,
			delay: 200,
			useNativeDriver: true,
		}).start();
	}, [onDuration, onTenants, onRooms, onPrice]);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity
					onPress={() => goBackHandler()}
					style={styles.backButtonStyle}
				>
					<Entypo name="chevron-small-left" size={24} color="black" />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Step 3 of 3: Add details</Text>
			</View>
			{onDuration && (
				<View style={styles.subContainer}>
					<Animated.Image
						source={require("../../../assets/images/Duration.png")}
						resizeMode="cover"
						style={{
							width: "70%",
							alignSelf: "center",
							transform: [{ translateX: imageAnim }],
						}}
					/>
					<Animated.View style={{ transform: [{ translateX: compAnim }] }}>
						<InputSpinner
							max={24}
							min={3}
							step={1}
							type="float"
							showBorder={false}
							value={duration}
							onChange={(num) => {
								setDuration(num);
							}}
							style={{ alignItems: "center", width: 200, alignSelf: "center" }}
							inputStyle={{ fontSize: 24 }}
							buttonTextColor={Colors.secondary}
							buttonPressStyle={{
								width: 50,
								height: 50,
								backgroundColor: "transparent",
							}}
							buttonStyle={{
								width: 50,
								height: 50,
								backgroundColor: "transparent",
							}}
						/>
					</Animated.View>
					<Text style={styles.title}>ℹ Expected duration(in months).</Text>
				</View>
			)}
			{onTenants && (
				<View style={styles.subContainer}>
					<Animated.Image
						source={require("../../../assets/images/Tenants.png")}
						resizeMode="cover"
						style={{
							width: "70%",
							alignSelf: "center",
							transform: [{ translateX: imageAnim }],
						}}
					/>
					<Animated.View style={{ transform: [{ translateX: compAnim }] }}>
						<InputSpinner
							max={10}
							min={1}
							step={1}
							type="float"
							showBorder={false}
							value={tenants}
							onChange={(num) => {
								setTenants(num);
							}}
							style={{ alignItems: "center", width: 200, alignSelf: "center" }}
							inputStyle={{ fontSize: 24 }}
							buttonTextColor={Colors.secondary}
							buttonPressStyle={{
								width: 50,
								height: 50,
								backgroundColor: "transparent",
							}}
							buttonStyle={{
								width: 50,
								height: 50,
								backgroundColor: "transparent",
							}}
						/>
					</Animated.View>
					<Text style={styles.title}>ℹ No. of Tenants</Text>
				</View>
			)}
			{onRooms && (
				<View style={styles.subContainer}>
					<Animated.Image
						source={require("../../../assets/images/Room.png")}
						resizeMode="cover"
						style={{
							width: "70%",
							alignSelf: "center",
							transform: [{ translateX: imageAnim }],
						}}
					/>
					<Animated.View style={{ transform: [{ translateX: compAnim }] }}>
						<InputSpinner
							max={24}
							min={1}
							step={1}
							type="float"
							showBorder={false}
							value={rooms}
							onChange={(num) => {
								setRooms(num);
							}}
							style={{ alignItems: "center", width: 200, alignSelf: "center" }}
							inputStyle={{ fontSize: 24 }}
							buttonTextColor={Colors.secondary}
							buttonPressStyle={{
								width: 50,
								height: 50,
								backgroundColor: "transparent",
							}}
							buttonStyle={{
								width: 50,
								height: 50,
								backgroundColor: "transparent",
							}}
						/>
					</Animated.View>
					<Text style={styles.title}>ℹ No. of Rooms</Text>
				</View>
			)}
			{onPrice && (
				<View style={styles.subContainer}>
					<Animated.Image
						source={require("../../../assets/images/PriceTag.png")}
						resizeMode="cover"
						style={{
							width: "70%",
							alignSelf: "center",
							transform: [{ translateX: imageAnim }],
						}}
					/>
					<Animated.View style={{ transform: [{ translateX: compAnim }] }}>
						<Slider
							style={{ width: 200, height: 40 }}
							minimumValue={0}
							value={price}
							onValueChange={(value) => {
								setPrice(value);
							}}
							step={5000}
							maximumValue={100000}
							minimumTrackTintColor={Colors.secondary}
							maximumTrackTintColor={Colors.primary}
						/>
					</Animated.View>
					<Text style={{ fontFamily: Fonts.title, fontSize: 32 }}>
						Rs. {price}
					</Text>
					<Text style={styles.title}>ℹ Price per month</Text>
				</View>
			)}
			<TouchableOpacity
				onPress={() => callNextHandler()}
				style={{ alignSelf: "flex-end", marginRight: 20, marginBottom: 20 }}
			>
				<AntDesign name="arrowright" size={46} color="black" />
			</TouchableOpacity>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: Platform.OS === "android" ? 50 : 0,
	},
	subContainer: {
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	},
	header: {
		zIndex: 1,
		flexDirection: "row",
		alignItems: "center",
		paddingLeft: 20,
	},
	headerTitle: {
		fontSize: 18,
		marginLeft: 20,
	},
	backButtonStyle: {
		backgroundColor: "rgb(201, 202, 203)",
		borderRadius: 14,
		padding: 4,
	},
	title: {
		color: "#888",
		letterSpacing: 0.5,
		marginLeft: 20,
		marginVertical: 20,
	},
});
