import React, { useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	SafeAreaView,
	StyleSheet,
	ImageBackground,
	Dimensions,
	FlatList,
	ScrollView,
	Platform,
	ToastAndroid,
} from "react-native";
import LoadingScreen from "../LoadingScreen";
import { Button, IconButton } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import Fonts from "../../constants/Fonts";
import Colors from "../../constants/Colors";
import { MaterialCommunityIcons, Ionicons, Feather } from "@expo/vector-icons";
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default function ApartmentScreen({ navigation, route }) {
	const { apartment } = route.params;

	const goBackHandler = () => {
		navigation.goBack();
	};
	console.log(apartment);
	return (
		<ScrollView>
			<ImageBackground
				source={{ uri: apartment.gallery[0] }}
				style={{ width: "100%", height: SCREEN_HEIGHT / 2.7 }}
			>
				<TouchableOpacity
					onPress={() => goBackHandler()}
					style={styles.backButtonStyle}
				>
					<Entypo
						name="chevron-small-left"
						style={{}}
						size={24}
						color="black"
					/>
				</TouchableOpacity>
			</ImageBackground>
			<Text style={styles.title}>{apartment.title}</Text>
			<Text
				style={styles.address}
			>{`${apartment.landmark} ${apartment.address}`}</Text>
			<View style={styles.rowContainer}>
				<View style={styles.row}>
					<MaterialCommunityIcons
						name="human-male"
						size={18}
						color={Colors.secondary}
						style={{ marginRight: 10 }}
					/>
					<Text>{apartment.tenants}</Text>
				</View>
				<View style={styles.row}>
					<Ionicons
						name="bed"
						size={18}
						color={Colors.secondary}
						style={{ marginRight: 10 }}
					/>
					<Text>{apartment.rooms}</Text>
				</View>
				<View style={styles.row}>
					<Feather
						name="clock"
						size={18}
						color={Colors.secondary}
						style={{ marginRight: 10 }}
					/>
					<Text>{apartment.duration}</Text>
				</View>
			</View>
			<Text style={styles.description}>{apartment.description}</Text>
			<Text style={[styles.title, { fontSize: 18, marginTop: 10 }]}>
				Gallery
			</Text>
			<FlatList
				style={{ marginLeft: 10 }}
				data={apartment.gallery}
				keyExtractor={(item) => item}
				showsHorizontalScrollIndicator={false}
				horizontal
				renderItem={({ item, index }) => (
					<ImageBackground
						source={{ uri: item }}
						style={styles.image}
						key={index}
					/>
				)}
			/>
			<View
				style={{
					flexDirection: "row",
					marginHorizontal: 20,
					marginTop: 35,
					overflow: "hidden",
					justifyContent: "space-between",
				}}
			>
				<View>
					<Text style={(styles.address, { marginLeft: 0 })}>Price</Text>
					<Text style={{ fontSize: 24, fontWeight: "900" }}>
						Rs {apartment.price}
						<Text style={{ fontSize: 16, fontWeight: "400" }}>/month</Text>
					</Text>
				</View>
				<IconButton
					icon="phone"
					onPress={() => {
						onSubmit();
					}}
					size={30}
					color="#fff"
					style={styles.button}
				>
					Call contact
				</IconButton>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: Platform.OS === "android" ? 50 : 0,
	},
	backButtonStyle: {
		marginTop: 50,
		marginLeft: 20,
		alignSelf: "flex-start",
		padding: 4,
		backgroundColor: "rgba(201, 202, 203,0.7)",
		borderRadius: 14,
		overflow: "hidden",
	},
	title: {
		fontFamily: Fonts.title,
		fontSize: 24,
		marginLeft: 20,
		marginVertical: 20,
		marginBottom: 10,
	},
	address: {
		fontSize: 14,
		color: "rgb(91, 91, 91)",
		marginLeft: 20,
		width: "85%",
		marginBottom: 10,
	},
	description: {
		color: "rgb(145,145,145)",
		marginLeft: 20,
		width: "85%",
		marginBottom: 10,
	},
	image: {
		width: 120,
		height: 100,
		borderRadius: 10,
		overflow: "hidden",
		marginHorizontal: 10,
	},
	button: {
		borderRadius: 50,
		backgroundColor: Colors.secondary,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginRight: 10,
		borderWidth: 0.2,
		borderColor: "rgb(174, 174, 174)",
		padding: 5,
		borderRadius: 4,
	},
	rowContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginHorizontal: 20,
		marginVertical: 10,
	},
});
