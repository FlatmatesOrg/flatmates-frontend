import React, { useState } from "react";
import {
	Platform,
	StyleSheet,
	ImageBackground,
	View,
	TouchableOpacity,
	ToastAndroid,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import LoadingScreen from "../LoadingScreen";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../constants/Colors";
import PickName from "../../components/PickName";
import PickAvatar from "../../components/PickAvatar";
import PickInterests from "../../components/PickInterests";
import PickLocation from "../../components/PickLocation";
import * as userActions from "../../store/actions/User";
export default function NameAgeScreen({ navigation }) {
	const userDetails = useSelector((state) => state.User);
	const authDetails = useSelector((state) => state.Auth);
	const [firstName, setFirstName] = useState(userDetails.firstName);
	const [lastName, setLastName] = useState(userDetails.lastName);
	const [displayPicture, setDisplayPicture] = useState(
		userDetails.displayPicture
	);
	const [interests, setInterests] = useState(userDetails.interests);
	const [age, setAge] = useState(userDetails.age ? userDetails.age : 18);
	const [locality, setLocality] = useState(userDetails.locality);
	const [nameAge, setNameAge] = useState(true);
	const [dp, setDp] = useState(false);
	const [onInterests, setOnInterests] = useState(false);
	const [onLocation, setOnLocation] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();
	const pickNameHandler = () => {
		if (firstName && lastName && age) {
			setNameAge(false);
			setDp(true);
		} else {
			if (Platform.OS === "android") {
				ToastAndroid.show("Fill all the details", ToastAndroid.SHORT);
			} else {
				alert("Fill all the details");
			}
		}
	};
	const pickAvatarHandler = () => {
		if (displayPicture) {
			setDp(false);
			setOnInterests(true);
		} else {
			if (Platform.OS === "android") {
				ToastAndroid.show("Select an avatar", ToastAndroid.SHORT);
			} else {
				alert("Select an avatar");
			}
		}
	};
	const pickInterestsHandler = () => {
		if (interests.length >= 3) {
			setOnInterests(false);
			setOnLocation(true);
		} else {
			if (Platform.OS === "android") {
				ToastAndroid.show(
					"Choose three interests to continue",
					ToastAndroid.SHORT
				);
			} else {
				alert("Choose three interests to continue");
			}
		}
	};

	const pickLocationHandler = async (locality) => {
		try {
			setIsLoading(true);
			const response = await dispatch(
				userActions.updateUser(
					authDetails.token,
					firstName,
					lastName,
					displayPicture,
					age,
					interests,
					locality
				)
			);
			if (response && response.message) {
				if (Platform.OS === "android") {
					ToastAndroid.show("No user found", ToastAndroid.SHORT);
				} else {
					alert("No user found");
				}
			}
		} catch (error) {
			console.log(error);
			setIsLoading(false);
			alert("Something went wrong");
		}
	};

	const goBackHandler = () => {
		if (dp) {
			setDp(false);
			setNameAge(true);
		} else if (onInterests) {
			setDp(true);
			setOnInterests(false);
		} else if (onLocation) {
			setOnInterests(true);
			setOnLocation(false);
		}
	};

	if (isLoading) {
		return <LoadingScreen />;
	}

	return (
		<ImageBackground
			source={require("../../../assets/images/GroupRear.png")}
			style={styles.container}
			blurRadius={5}
		>
			<LinearGradient
				colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0.8)"]}
				start={{ x: 0, y: 0 }}
				end={{ x: 0.4, y: 0.8 }}
				style={{
					position: "absolute",
					opacity: 1,
					width: "100%",
					height: "120%",
				}}
			></LinearGradient>
			<View style={styles.headerRow}>
				{!nameAge && (
					<TouchableOpacity onPress={() => goBackHandler()}>
						<Entypo name="chevron-left" size={32} color={Colors.secondary} />
					</TouchableOpacity>
				)}

				{onInterests && interests.length > 0 && (
					<TouchableOpacity onPress={() => pickInterestsHandler()}>
						<AntDesign name="check" size={32} color={Colors.secondary} />
					</TouchableOpacity>
				)}
			</View>

			{nameAge && (
				<PickName
					firstName={firstName}
					lastName={lastName}
					setFirstName={setFirstName}
					setLastName={setLastName}
					age={age}
					setAge={setAge}
					pickNameHandler={pickNameHandler}
				/>
			)}
			{dp && (
				<PickAvatar
					displayPicture={displayPicture}
					setDisplayPicture={setDisplayPicture}
					pickAvatarHandler={pickAvatarHandler}
				/>
			)}
			{onLocation && (
				<PickLocation
					locality={locality}
					setLocality={setLocality}
					pickLocationHandler={pickLocationHandler}
				/>
			)}
			{onInterests && (
				<PickInterests interests={interests} setInterests={setInterests} />
			)}
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
		paddingTop: Platform.OS === "android" ? 25 : 25,
	},
	headerRow: {
		flexDirection: "row",
		paddingTop: 25,
		justifyContent: "space-between",
		paddingHorizontal: 15,
	},
	subContainer: {
		// backgroundColor: "rgba(255, 255, 255,1)",
		borderTopRightRadius: 40,
		borderTopLeftRadius: 40,
		padding: 20,
		paddingBottom: 80,
		position: "absolute",
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
