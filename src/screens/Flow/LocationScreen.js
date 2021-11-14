import React, { useCallback, useState, useRef, useMemo } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	TouchableOpacity,
	Image,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import MapAddress from "../../components/MapAddress";
import useReadLocation from "../../hooks/useReadLocation";
import RBSheet from "react-native-raw-bottom-sheet";

export default function LocationScreen({ navigation }) {
	const [region, setRegion] = useState({
		latitude: 23.155,
		longitude: 87.655,
		latitudeDelta: 0.000922,
		longitudeDelta: 0.000421,
	});
	const [addressLoading, setAddressLoading] = useState(false);
	const [address, setAddress] = useState(null);
	const [getReadableLocation, errorRead] = useReadLocation();
	const refRBSheet = useRef();

	const onRegionChangeComplete = useCallback(async (region) => {
		setRegion(region);
		setAddressLoading(true);
		const { formattedAddress } = await getReadableLocation(
			region.latitude,
			region.longitude
		);
		setAddressLoading(false);
		setAddress(formattedAddress);
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity
					onPress={() => navigation.goBack()}
					style={styles.backButtonStyle}
				>
					<Entypo name="chevron-small-left" size={24} color="black" />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Step 1 of 3: Select location</Text>
			</View>
			<View style={styles.pinContainer}>
				<Image
					style={styles.marker}
					source={require("../../../assets/images/LocationPin.png")}
				/>
			</View>
			<MapView
				provider={PROVIDER_GOOGLE}
				initialRegion={region}
				style={styles.map}
				onRegionChangeComplete={onRegionChangeComplete}
			/>

			<MapAddress refRBSheet={refRBSheet} item={address} />
			<RBSheet
				ref={refRBSheet}
				closeOnDragDown={true}
				closeOnPressMask={false}
				customStyles={{
					wrapper: {
						backgroundColor: "transparent",
					},
					container: {
						height: 350,
					},
					draggableIcon: {
						backgroundColor: Colors.secondary,
					},
				}}
			>
				<TextInput
					style={styles.input}
					label="Title"
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
				/>

				<TextInput
					style={styles.input}
					label="Nearest Landmark"
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
				/>
				<Button
					dark
					color={Colors.secondary}
					style={styles.button}
					mode="contained"
					uppercase={false}
					contentStyle={{ padding: 10 }}
				>
					Continue to Step 2
				</Button>
			</RBSheet>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	map: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
		zIndex: 0,
	},
	header: {
		position: "absolute",
		top: "6%",
		left: "3%",
		zIndex: 1,
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
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
	pinContainer: {
		position: "absolute",
		zIndex: 1,
	},
	marker: {
		height: 170,
		width: 170,
		alignSelf: "center",
	},
	contentContainer: {
		flex: 1,
		alignItems: "center",
	},
	input: {
		marginHorizontal: 40,
		marginVertical: 20,
		color: "#fff",
	},
	button: {
		width: "80%",
		alignSelf: "center",
		borderRadius: 10,
		marginTop: 20,
	},
});
