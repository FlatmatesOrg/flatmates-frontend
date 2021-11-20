import React, { useState, useCallback, useEffect } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Platform,
	SafeAreaView,
	FlatList,
	ToastAndroid,
} from "react-native";
import { Searchbar, Chip, Button } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import InputSpinner from "react-native-input-spinner";
import RangeSlider from "rn-range-slider";
import Thumb from "../../components/RangeSlider/Thumb";
import Rail from "../../components/RangeSlider/Rail";
import RailSelected from "../../components/RangeSlider/RailSelected";
import Label from "../../components/RangeSlider/Label";
import Notch from "../../components/RangeSlider/Notch";
import Fonts from "../../constants/Fonts";
import { useDispatch } from "react-redux";
import * as apartmentActions from "../../store/actions/Apartment";
import LoadingScreen from "../LoadingScreen";
export default function FilterScreen({ navigation, route }) {
	const [locality, setLocality] = useState([]);
	const [noOfRooms, setNoOfRooms] = useState(1);
	const [noOfTenants, setNoOfTenants] = useState(1);
	const [duration, setDuration] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();
	const [low, setLow] = useState(0);
	const [high, setHigh] = useState(0);
	const renderThumb = useCallback(() => <Thumb />, []);
	const renderRail = useCallback(() => <Rail />, []);
	const renderRailSelected = useCallback(() => <RailSelected />, []);
	const renderLabel = useCallback((value) => <Label text={value} />, []);
	const renderNotch = useCallback(() => <Notch />, []);
	const handleValueChange = useCallback((low, high) => {
		setLow(low);
		setHigh(high);
	}, []);

	useEffect(() => {
		if (route.params.local) {
			setLocality((x) => x.concat(route.params.local));
		}
	}, [route.params]);

	const getApartmentsHandler = async () => {
		try {
			setIsLoading(true);
			const response = await dispatch(
				apartmentActions.getApartmentsUsingFilters(
					locality,
					{ low, high },
					noOfTenants,
					noOfRooms,
					duration
				)
			);
			setIsLoading(false);
			if (response && response.message) {
				if (Platform.OS === "android") {
					ToastAndroid.show(response.message, ToastAndroid.SHORT);
				} else {
					alert(response.message);
				}
			}
		} catch (error) {
			setIsLoading(false);
			alert("Something went wrong");
		}
	};

	const getAllChips = () => {
		return locality.map((item, index) => {
			return (
				<Chip
					key={index}
					mode="outlined"
					style={{
						height: 32,
					}}
					onClose={() => {
						setLocality((x) => x.filter((y) => y !== item));
					}}
				>
					{item}
				</Chip>
			);
		});
	};

	if (isLoading) {
		return <LoadingScreen />;
	}

	return (
		<SafeAreaView style={styles.container}>
			<TouchableOpacity
				onPress={() => navigation.goBack()}
				style={styles.backButtonStyle}
			>
				<Entypo name="chevron-small-left" size={24} color="black" />
			</TouchableOpacity>
			<Text style={styles.headerTitle}>Add filters</Text>

			<Text style={[styles.title, { marginLeft: 40 }]}>Addresses</Text>
			<View
				style={{ flexDirection: "row", flexWrap: "wrap", marginHorizontal: 40 }}
			>
				{locality.length > 0 && getAllChips()}
				<Chip
					onPress={() => navigation.navigate("GetAddress")}
					mode="outlined"
					style={{
						height: 32,
					}}
					icon="plus"
				>
					Add address
				</Chip>
			</View>

			<Text style={[styles.title, { marginLeft: 40 }]}>Price/Month</Text>

			<RangeSlider
				style={styles.slider}
				min={0}
				max={100000}
				step={500}
				floatingLabel
				renderThumb={renderThumb}
				renderRail={renderRail}
				renderRailSelected={renderRailSelected}
				renderLabel={renderLabel}
				renderNotch={renderNotch}
				onValueChanged={handleValueChange}
			/>
			<View style={styles.row}>
				<View>
					<Text style={styles.title}>No. of Tenants</Text>
					<InputSpinner
						max={24}
						min={1}
						step={1}
						type="float"
						showBorder={false}
						value={noOfTenants}
						onChange={(num) => {
							setNoOfTenants(num);
						}}
						style={{
							alignItems: "center",
							// width: 120,
							alignSelf: "center",
						}}
						inputStyle={{ fontSize: 18 }}
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
				</View>
				<View>
					<Text style={styles.title}>No. of Rooms</Text>
					<InputSpinner
						max={24}
						min={1}
						step={1}
						type="float"
						showBorder={false}
						value={noOfRooms}
						onChange={(num) => {
							setNoOfRooms(num);
						}}
						style={{
							alignItems: "center",
							// width: 120,
							alignSelf: "center",
						}}
						inputStyle={{ fontSize: 18 }}
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
				</View>
			</View>
			<View>
				<Text style={[styles.title, { marginLeft: 40 }]}>
					Duration (in months)
				</Text>
				<InputSpinner
					max={24}
					min={1}
					step={1}
					type="float"
					showBorder={false}
					value={duration}
					onChange={(num) => {
						setDuration(num);
					}}
					style={{
						alignItems: "center",
						width: 140,
						alignSelf: "center",
					}}
					inputStyle={{ fontSize: 18 }}
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
			</View>
			<Button
				onPress={() => {
					getApartmentsHandler();
				}}
				dark
				color={Colors.secondary}
				style={styles.button}
				mode="contained"
				contentStyle={{ padding: 10 }}
			>
				Continue
			</Button>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? 45 : 0,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginHorizontal: 40,
	},
	headerTitle: {
		fontSize: 24,
		fontFamily: Fonts.title,
		marginHorizontal: 40,
	},
	backButtonStyle: {
		marginLeft: 20,
		alignSelf: "flex-start",
		padding: 4,
		backgroundColor: "rgba(201, 202, 203,0.7)",
		borderRadius: 14,
		overflow: "hidden",
	},
	input: {
		marginHorizontal: 40,
		marginVertical: 20,
		color: "#fff",
	},

	title: {
		color: "#888",
		letterSpacing: 0.5,

		marginVertical: 20,
	},
	slider: {
		marginHorizontal: 40,
	},
	button: {
		width: "80%",
		alignSelf: "center",
		marginTop: 50,
		borderRadius: 10,
	},
});
